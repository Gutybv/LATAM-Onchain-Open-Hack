// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BuilderContract {
    struct User {
        address userAddress;
        bool isRegistered;
    }

    address public owner;
    address[] public registeredUsers;  // Lista de usuarios registrados
    mapping(address => User) public users;
    mapping(address => mapping(address => bool)) public likes;
    mapping(address => uint256) public stakes;

    uint256 public likeFee = 0.0001 ether;
    uint256 public feePercentage = 10;
    uint256 public contractBalance = 0;

    event Registered(address user);
    event Liked(address liker, address liked);
    event Matched(address user1, address user2);
    event Withdrawn(address user, uint256 amount);

    modifier onlyRegistered() {
        require(users[msg.sender].isRegistered, "User not registered");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function register() external {
        require(!users[msg.sender].isRegistered, "User already registered");
        users[msg.sender] = User(msg.sender, true);
        registeredUsers.push(msg.sender);  // Añadir usuario a la lista de registrados
        emit Registered(msg.sender);
    }

    function like(address _likedUser) external payable onlyRegistered {
        require(msg.value == likeFee, "Incorrect fee");
        require(users[_likedUser].isRegistered, "Liked user not registered");
        require(!likes[msg.sender][_likedUser], "Already liked this user");

        likes[msg.sender][_likedUser] = true;
        stakes[msg.sender] += msg.value;
        contractBalance += msg.value;  // Añadir al balance del contrato
        emit Liked(msg.sender, _likedUser);
    }

    function checkMatch(address _user1, address _user2) external {
        require(users[_user1].isRegistered && users[_user2].isRegistered, "Both users must be registered");

        if (likes[_user1][_user2] && likes[_user2][_user1]) {
            uint256 stake1 = stakes[_user1];
            uint256 stake2 = stakes[_user2];
            uint256 totalStake = stake1 + stake2;
            uint256 fee = (totalStake * feePercentage) / 100;
            uint256 reward = totalStake - fee;

            // Resetear stakes
            stakes[_user1] = 0;
            stakes[_user2] = 0;

            // Ajustar balance del contrato
            contractBalance -= totalStake;
            contractBalance += fee;

            // Transferir recompensas
            payable(_user1).transfer(reward / 2);
            payable(_user2).transfer(reward / 2);

            emit Matched(_user1, _user2);
        }
    }

    function withdrawContractBalance() external onlyOwner {
        uint256 balance = contractBalance;
        contractBalance = 0;
        payable(owner).transfer(balance);

        emit Withdrawn(owner, balance);
    }

    function getContractBalance() external view returns (uint256) {
        return contractBalance;
    }

    function getRegisteredUsers() external view returns (address[] memory) {
        return registeredUsers;
    }
}
