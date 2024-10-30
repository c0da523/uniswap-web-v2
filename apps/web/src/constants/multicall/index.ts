import { ChainId } from '@repo/uniswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.TZKJ]: '0xEfAC887Bb3ad65250DCFCB160397d61f98e675EB',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
