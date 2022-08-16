import { pick } from "lodash"

export const transactionPropertiesForUI = [
  "hash",
  "from",
  "fromTruncated",
  "to",
  "toTruncated",
  "infoRows",
  "asset.symbol",
  "asset.decimals",
  "value",
  "localizedDecimalValue",
  "blockHeight",
  "blockHash",
  "status",
  "network.chainID",
  "network.name",
  "network.baseAsset.symbol",
  "maxFeePerGas",
  "gasPrice",
  "gasUsed",
  "nonce",
  "annotation.blockTimestamp",
  "annotation.type",
  "annotation.source",
  "annotation.recipient.address",
  "annotation.recipient.network",
  "annotation.recipient.annotation",
  "annotation.recipient.annotation.nonce",
  "annotation.recipient.annotation.balance",
  "annotation.recipient.annotation.nameOnNetwork.name",
  "annotation.sender.address",
  "annotation.sender.network",
  "annotation.sender.annotation",
  "annotation.sender.annotation.nonce",
  "annotation.sender.annotation.balance",
  "annotation.sender.annotation.nameOnNetwork.name",
  "annotation.spender.address",
  "annotation.spender.network",
  "annotation.spender.annotation",
  "annotation.spender.annotation.nonce",
  "annotation.spender.annotation.balance",
  "annotation.spender.annotation.nameOnNetwork.name",
  "annotation.contractName",
  "annotation.transactionLogoURL",
  "annotation.assetAmount",
  "annotation.displayFields",
  "annotation.assetAmount.asset.symbol",
  "annotation.assetAmount.amount",
  "annotation.assetAmount.localizedDecimalAmount",
  "annotation.fromAssetAmount.asset.symbol",
  "annotation.toAssetAmount.asset.symbol",
]

export function filterTransactionPropsForUI<T>(transactionData: {
  transaction: T
  forAccounts: string[]
}): { transaction: T; forAccounts: string[] } {
  return {
    transaction: pick(transactionData.transaction, transactionPropertiesForUI),
    forAccounts: transactionData.forAccounts,
  } as { transaction: T; forAccounts: string[] }
}
