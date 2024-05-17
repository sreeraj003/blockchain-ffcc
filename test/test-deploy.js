const {ethers} = require("hardhat")
const {exprect,assert} = require("chai")
describe("simpleStorage", function (){
  let SimpleStorage,simpleStorage
  beforeEach(async function (){
     SimpleStorage = await ethers.getContractFactory("SimpleStorage")
     simpleStorage = await SimpleStorage.deploy()
     await simpleStorage.getDeployedCode()
  })

  it("should start with a fav num of 0",async function (){
    const currentValue = await simpleStorage.retrieve()
    const expectedValue =0
    assert.equal(currentValue.toString(),expectedValue.toString())
  })
  
  it("should update when called the store",async function(){
    const expect = 7
    const transactionResponse = await simpleStorage.store(expect)
    await transactionResponse.wait(1)
    const current = await simpleStorage.retrieve()
    assert.equal(current.toString(),expect)
  })

  
})
