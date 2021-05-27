const { assert } = require('chai');
const _deploy_contracts = require('../migrations/2_deploy_contracts');

const DappToken = artifacts.require("DappToken");
const DaiToken = artifacts.require("DaiToken");
const TokenFarm = artifacts.require("TokenFarm");

require('chai')
    .use(require('chai-as-promised'))
    .should()

function tokens(n){
    return web3.utils.toWei(n,'ether');
}
contract('TokenFarm',([owner,investor])=>{
    let daiToken,dappToken,tokenFarm

before(async () => {
        daiToken = await DaiToken.new()
        dappToken = await DappToken.new()
        tokenFarm = await TokenFarm.new(dappToken.address,daiToken.address)
    //Transfer all Dapp tokens to farm
    await dappToken.transfer(tokenFarm.address,tokens('1000000'))

    await daiToken.transfer(investor,tokens('100'),{from:owner})
})


    describe('Mock Dai deployment',async()=> {
        it('has a name' , async () => {
         
            const name = await daiToken.name()
            assert.equal(name,'Mock DAI Token')
        })
    })
    describe('Dapp Token deployment',async()=> {
        it('has a name' , async () => {
         
            const name = await dappToken.name()
            assert.equal(name,'DApp Token')
        })
    })    
    describe('Token Farm deployment',async()=> {
        it('has a name' , async () => {
         
            const name = await tokenFarm.name()
            assert.equal(name,'Dapp Token Farm')
        })
    })
    it('contract has tokens', async () =>{
        let balance = await dappToken.balanceOf(tokenFarm.address)
        assert.equal(balance.toString(),tokens('1000000'))
    })


})