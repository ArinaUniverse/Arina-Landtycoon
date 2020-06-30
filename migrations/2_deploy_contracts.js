// const ConvertLib = artifacts.require("ConvertLib");
// const MetaCoin = artifacts.require("MetaCoin");

// module.exports = function(deployer) {
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MetaCoin);
//   deployer.deploy(MetaCoin);
// };

//const newMats = artifacts.require("newMaterials");
const trade = artifacts.require("trade");
const arina = artifacts.require("arina");
const master = artifacts.require("landTycoonMaster");
const personCall = artifacts.require("personCall");
const landsMix = artifacts.require("landsMix");
const slave1 = artifacts.require("slave");
const slave2 = artifacts.require("slave2");
const slave3 = artifacts.require("slave3");
const slave4 = artifacts.require("slave4");
const slave5 = artifacts.require("slave5");
const slave6 = artifacts.require("slave6");
const slave7 = artifacts.require("slave7");
const slave8 = artifacts.require("slave8");
const slave9 = artifacts.require("slave9");
const slave10 = artifacts.require("slave10");
const slave11 = artifacts.require("slave11");
const slave12 = artifacts.require("slave12");
const slave13 = artifacts.require("slave13");
const slave14 = artifacts.require("slave14");
const slave15 = artifacts.require("slave15");
const slave16 = artifacts.require("slave16");
//const operator = artifacts.require("operator");
//const OMD = artifacts.require("setOperator");
const yakuka = artifacts.require("yakuka");

// const newMats = artifacts.require("newMaterials");
// const operator = artifacts.require("operator");

module.exports = function (deployer) {
    console.log("\n<<<<<<<<<<<<<<<<2_deploy_contracts>>>>>>>>>>>>>>");
    //deployer.deploy(newMats);
    deployer.deploy(trade);
    deployer.deploy(arina);
    deployer.deploy(master);
    deployer.deploy(personCall);
    deployer.deploy(landsMix);
    deployer.deploy(slave1);
    deployer.deploy(slave2);
    deployer.deploy(slave3);
    deployer.deploy(slave4);
    deployer.deploy(slave5);
    deployer.deploy(slave6);
    deployer.deploy(slave7);
    deployer.deploy(slave8);
    deployer.deploy(slave9);
    deployer.deploy(slave10);
    deployer.deploy(slave11);
    deployer.deploy(slave12);
    deployer.deploy(slave13);
    deployer.deploy(slave14);
    deployer.deploy(slave15);
    deployer.deploy(slave16);

    //deployer.deploy(operator);
    //deployer.deploy(OMD);
    deployer.deploy(yakuka);

    // deployer.deploy(operator);
    // deployer.deploy(newMats);
};
