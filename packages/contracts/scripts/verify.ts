import { ethers, run } from "hardhat";

const main = async () => {
  const [deployer] = await ethers.getSigners();

  await run("verify:verify", {
    address: "0x74E568a889123bAecf6708242Da34d8A99e7fCD0",
    constructorArguments: ["0x1b5c6140444CE28454DC32345dc090b923dB2487", 0],
  });

  await run("verify:verify", {
    address: "0x3374ca798ef81E6959A5e2A050A47B98a13B4E87",
    constructorArguments: [],
  });

  await run("verify:verify", {
    address: "0x1b5c6140444CE28454DC32345dc090b923dB2487",
    constructorArguments: [
      "0x74E568a889123bAecf6708242Da34d8A99e7fCD0",
      "0x79e2d470f950f2cf78eef41720e8ff2cf4b3cd78",
      deployer.address,
      "0x74E568a889123bAecf6708242Da34d8A99e7fCD0",
      "0x3374ca798ef81E6959A5e2A050A47B98a13B4E87",
      25,
      1,
      1,
      1,
    ],
  });
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
