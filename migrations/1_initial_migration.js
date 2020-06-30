const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
    console.log("\n<<<<<<<<<<<<<<<<1_inital_migration>>>>>>>>>>>>>>");
    deployer.deploy(Migrations);
};
