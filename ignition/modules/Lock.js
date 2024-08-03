const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BuilderContract", (m) => {


  const builderContract = m.contract("BuilderContract");

  return { builderContract };
});
