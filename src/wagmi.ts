import { w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig } from 'wagmi'
import { polygon } from 'wagmi/chains'

export const walletConnectProjectId = 'd675701473f6801dbf1b6abc57dadaf7'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygon, ...(import.meta.env?.MODE === 'development' ? [polygon] : [])],
  [w3mProvider({ projectId: walletConnectProjectId })],
)

export const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({
    chains,
    projectId: walletConnectProjectId,
    version: 2,
  }),
  publicClient,
  webSocketPublicClient,
})

export { chains }
