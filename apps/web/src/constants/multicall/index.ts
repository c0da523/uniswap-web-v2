import { ChainId } from '@repo/uniswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.TZKJ]: '0xEfAC887Bb3ad65250DCFCB160397d61f98e675EB',
  [ChainId.SEPOLIA]: '0x2Bb71a1B7ed94bE82b31113751e8D0AdE5989236',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
