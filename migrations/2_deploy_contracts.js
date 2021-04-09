const Elektron = artifacts.require("Elektron");
const Admin = artifacts.require("Admin");
const Consumption = artifacts.require("Consumption");

// const TokenController = artifacts.require("TokenController");
module.exports = async function(deployer) {

    await deployer.deploy(Elektron);
    const token = await Elektron.deployed();

    await deployer.deploy(Consumption,token.address);
    const consumption = await Consumption.deployed();


    await token.transfer(consumption.address,"10000000000000000000000");

    await deployer.deploy(Admin);
    const admin = await Admin.deployed();

    




}