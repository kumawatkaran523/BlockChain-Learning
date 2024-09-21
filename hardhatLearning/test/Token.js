// import { expect } from 'chai';

// describe("Token test", function () {
//   it("Deployment should assign the total supply of tokens to the owner", async function () {
//     const [owner] = await ethers.getSigners();
//     console.log("Signer object:", owner);

//     const Token = await ethers.getContractFactory("Token");
//     const hardhatToken = await Token.deploy();

//     await hardhatToken.deployed();
//     const ownerTokenBalance = await hardhatToken.getTokenAmt(owner.address);
//     const totalSupply = await hardhatToken.amount();

//     console.log("Owner token balance:", ownerTokenBalance.toString());
//     console.log("Total supply:", totalSupply.toString());

//     // Use .eq() to compare BigNumber values
//     expect(ownerTokenBalance.eq(totalSupply)).to.be.true;
//   });

//   it("Should tranfer token between addressess", async function () {
//     const [owner, addr1, addr2] = await ethers.getSigners();

//     const Token = await ethers.getContractFactory("Token");
//     const hardhatToken = await Token.deploy();

//     await hardhatToken.deployed();

//     await hardhatToken.transfer(addr1.address, 10);
//     expect((await hardhatToken.getTokenAmt(addr1.address)).eq(10)).to.be.true;

//     await hardhatToken.connect(addr1).transfer(addr2.address, 5);
//     expect((await hardhatToken.getTokenAmt(addr2.address)).eq(5)).to.be.true;
//   });
// });



// BETTER CODE
import { expect } from "chai";
import pkg from 'hardhat';
const { ethers } = pkg;



describe("Token test", function () {
  let Token;
  let hardhatToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    Token = await ethers.getContractFactory("Token");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    hardhatToken = await Token.deploy();
  });

  describe("Deployment testing", function () {
    it("Should assign the right owner", async function () {
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of token to the owner", async function () {
      const totalSupply = await hardhatToken.amount();
      const ownerBalance = await hardhatToken.getTokenAmt(owner.address);
      expect(totalSupply.eq(ownerBalance)).to.be.true;
    });
  });

  describe("Transaction testing", function () {
    it("should transfer tokens between accounts", async function () {
      // Transfer 10 tokens from owner to addr1
      await hardhatToken.transfer(addr1.address, 10);
      expect((await hardhatToken.getTokenAmt(addr1.address)).eq(10)).to.be.true;

      // Transfer 5 tokens from addr1 to addr2
      await hardhatToken.connect(addr1).transfer(addr2.address, 5);
      expect((await hardhatToken.getTokenAmt(addr2.address)).eq(5)).to.be.true;
    });

    // it("Should fail if sender does not have enough tokens", async function () {
    //   await expect(
    //     hardhatToken.connect(addr1).transfer(owner.address, 2)
    //   ).to.be.revertedWith("Not enough Token");
    // });

    it("Should update token after trasaction", async function () {
      const initialOwnerBalance = await hardhatToken.getTokenAmt(owner.address);
      await hardhatToken.transfer(addr1.address, 10);
      await hardhatToken.transfer(addr2.address, 10);

      const finalOwnerBalance = await hardhatToken.getTokenAmt(owner.address);
      expect(finalOwnerBalance.eq(initialOwnerBalance - 20)).to.be.true;
    })

  });

});
