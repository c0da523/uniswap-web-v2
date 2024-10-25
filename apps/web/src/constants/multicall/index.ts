import { ChainId } from '@repo/uniswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.TZKJ]: '0x913Da19f6C24A21Ded6c20739A27cB487a201FB4',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
