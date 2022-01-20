import { ethers } from "ethers";

export async function Allowance(tokenAddress) {
  const contractAddress = '0x8d8446F0c631fa524e6Ba30F0a778405c171D27E';
  let abi = ["function allowance(address _owner, address _spender) public view returns (uint256)"];
  
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const accounts = await provider.listAccounts();
  let signer = provider.getSigner(accounts[0]);

  const contract = new ethers.Contract(tokenAddress, abi, signer);
  let allowance = await contract.allowance(accounts[0], contractAddress);

  return allowance;
}