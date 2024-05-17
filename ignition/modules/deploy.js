const { ConstructorFragment, Contract } = require("ethers");
const { ethers, run,network } = require("hardhat")


async function main() {
    const simpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("deploying");
    const simpleStorage = await simpleStorageFactory.deploy()
    await simpleStorage.waitForDeployment()
    console.log(`deployed contract to : ${await simpleStorage.getAddress()}`);

    const currentValue = await simpleStorage.retrieve()
    console.log(currentValue.toString());
    const transactionResponse = await simpleStorage.store(5)
    await transactionResponse.wait(1)     
    const updatedValue = await simpleStorage.retrieve()
    console.log(updatedValue.toString());
}

async function verify(contractAddress, args) {
    console.log("verifying...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            ConstructorArguments: args
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("already verified");
        } else {
            console.log(e);
        }
    }
}

main().then(() => process.exit(0))
    .catch(err => {
        console.log(err);
        process.exit(1)
    })