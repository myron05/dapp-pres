import { ethers } from "ethers";
import abi from 'contract/presale.json';

export async function ReadContract() {
  const contractAddress = '0x8d8446F0c631fa524e6Ba30F0a778405c171D27E';
  const provider = ethers.getDefaultProvider('https://bsc-dataseed.binance.org/');

  const Contract = new ethers.Contract(
    contractAddress,
    abi,
    provider
  );

  return Contract;
}