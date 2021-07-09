<script lang="ts">
	import type { Ethereum } from '../data/ethereum/types'
	import type { QuoteCurrency, TickerSymbol } from '../data/currency/currency'
	import type { PriceFeedProvider } from '../data/ethereum/price/price-feed-provider'
	import { getChainlinkPriceFeed } from '../data/ethereum/price/chainlink'
	// import { getCompoundPriceFeed } from '.../../../data/ethereum/price/compound-price-feed'


	export let priceProvider: PriceFeedProvider

	export let token: TickerSymbol
	export let quoteCurrency: QuoteCurrency
	export let provider: Ethereum.Provider
	export let network: Ethereum.Network

	export let blockNumber: number


	let currentPriceSourceType: 'oracle' | 'api' = 'oracle'



	import Loader from './Loader.svelte'
	import TokenRate from './TokenRate.svelte'
	import TokenValue from './TokenValue.svelte'
	import Address from './Address.svelte'
</script>


<OraclePrice
	priceProvider={$preferredOracleProvider}
	token={erc20Token.symbol}
	quoteCurrency={$preferredQuoteCurrency}
	{provider}
	{network}
	whenErrored={() => currentPriceSourceType = 'api'}
>
	<slot name="header" slot="header" />
</OraclePrice>