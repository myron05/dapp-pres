import { ethers } from "ethers";
import abi from 'contract/presale.json';
import { Signer } from "./useSigner";

export async function Contract() {
  const contractAddress = '0x8d8446F0c631fa524e6Ba30F0a778405c171D27E';
  const signer = await Signer();

  const Contract = new ethers.Contract(
    contractAddress,
    abi,
    signer
  );

  return Contract;
}