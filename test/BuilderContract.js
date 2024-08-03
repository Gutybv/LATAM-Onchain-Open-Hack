const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { parseEther } = require("ethers");

describe("BuilderContract", function () {
  async function deployContract() {
    const [owner, user1, user2] = await ethers.getSigners();

    const BuilderContract = await ethers.getContractFactory("BuilderContract");
    const builderContract = await BuilderContract.deploy();

    return { builderContract, owner, user1, user2 };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { builderContract, owner } = await loadFixture(deployContract);
      expect(await builderContract.owner()).to.equal(owner.address);
    });
  });

  describe("Registration", function () {
    it("Should register users and update the registered users list", async function () {
      const { builderContract, user1, user2 } = await loadFixture(
        deployContract
      );

      await builderContract.connect(user1).register();
      await builderContract.connect(user2).register();

      const user1Info = await builderContract.users(user1.address);
      const user2Info = await builderContract.users(user2.address);

      expect(user1Info.isRegistered).to.be.true;
      expect(user2Info.isRegistered).to.be.true;

      const registeredUsers = await builderContract.getRegisteredUsers();
      expect(registeredUsers).to.include.members([user1.address, user2.address]);
    });

    it("Should not allow double registration", async function () {
      const { builderContract, user1 } = await loadFixture(deployContract);

      await builderContract.connect(user1).register();
      await expect(
        builderContract.connect(user1).register()
      ).to.be.revertedWith("User already registered");
    });
  });

  describe("Likes", function () {
    it("Should allow users to like others", async function () {
      const { builderContract, user1, user2 } = await loadFixture(
        deployContract
      );

      await builderContract.connect(user1).register();
      await builderContract.connect(user2).register();

      await expect(
        builderContract
          .connect(user1)
          .like(user2.address, { value: parseEther("0.0001") })
      )
        .to.emit(builderContract, "Liked")
        .withArgs(user1.address, user2.address);
    });

    it("Should not allow liking without the correct fee", async function () {
      const { builderContract, user1, user2 } = await loadFixture(
        deployContract
      );

      await builderContract.connect(user1).register();
      await builderContract.connect(user2).register();

      await expect(
        builderContract
          .connect(user1)
          .like(user2.address, { value: parseEther("0.00005") })
      ).to.be.revertedWith("Incorrect fee");
    });

    it("Should not allow liking non-registered users", async function () {
      const { builderContract, user1 } = await loadFixture(deployContract);

      await builderContract.connect(user1).register();

      await expect(
        builderContract
          .connect(user1)
          .like("0x0000000000000000000000000000000000000000", {
            value: parseEther("0.0001"),
          })
      ).to.be.revertedWith("Liked user not registered");
    });

    it("Should not allow double liking", async function () {
      const { builderContract, user1, user2 } = await loadFixture(
        deployContract
      );

      await builderContract.connect(user1).register();
      await builderContract.connect(user2).register();

      await builderContract
        .connect(user1)
        .like(user2.address, { value: parseEther("0.0001") });
      await expect(
        builderContract
          .connect(user1)
          .like(user2.address, { value: parseEther("0.0001") })
      ).to.be.revertedWith("Already liked this user");
    });
  });

  describe("Matches", function () {
    it("Should detect a match and distribute rewards", async function () {
      const { builderContract, user1, user2 } = await loadFixture(
        deployContract
      );

      await builderContract.connect(user1).register();
      await builderContract.connect(user2).register();

      await builderContract
        .connect(user1)
        .like(user2.address, { value: parseEther("0.0001") });
      await builderContract
        .connect(user2)
        .like(user1.address, { value: parseEther("0.0001") });

      await expect(builderContract.checkMatch(user1.address, user2.address))
        .to.emit(builderContract, "Matched")
        .withArgs(user1.address, user2.address);
    });

    it("Should not detect a match if only one like exists", async function () {
      const { builderContract, user1, user2 } = await loadFixture(
        deployContract
      );

      await builderContract.connect(user1).register();
      await builderContract.connect(user2).register();

      await builderContract
        .connect(user1)
        .like(user2.address, { value: parseEther("0.0001") });

      await expect(
        builderContract.checkMatch(user1.address, user2.address)
      ).to.not.emit(builderContract, "Matched");
    });
  });

  describe("Withdrawals", function () {
    it("Should allow the owner to withdraw contract balance", async function () {
      const { builderContract, owner, user1, user2 } = await loadFixture(
        deployContract
      );

      await builderContract.connect(user1).register();
      await builderContract.connect(user2).register();

      await builderContract
        .connect(user1)
        .like(user2.address, { value: parseEther("0.0001") });
      await builderContract
        .connect(user2)
        .like(user1.address, { value: parseEther("0.0001") });

      await builderContract.checkMatch(user1.address, user2.address);

      const contractBalance = await builderContract.getContractBalance();
      await expect(builderContract.withdrawContractBalance())
        .to.emit(builderContract, "Withdrawn")
        .withArgs(owner.address, contractBalance);
    });

    it("Should not allow non-owners to withdraw contract balance", async function () {
      const { builderContract, user1 } = await loadFixture(deployContract);

      await expect(
        builderContract.connect(user1).withdrawContractBalance()
      ).to.be.revertedWith("Only the owner can call this function");
    });
  });
});
