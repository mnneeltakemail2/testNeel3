# Tokens

Token is a sort of a digital token that has a certain consensus value. The Neel network allows users to create their own tokens to fulfill their specific need.

# 1. Issuing your own Token {#Tokens(customtokens)-IssuingyourownToken}

Neel network allows business to issue their own tokens for whatever needs they have. By releasing tokens, a business is able to create an internal digital currency via the blockchain. This way, it can use the blockchain to pay for the services and goods within projects or even crowdfunding.

Issuing a token on the Neel network comes with multiple benefits, including the ability to trade the token instantly on the Neel Decentralized Exchange. Not only that, but Neel tokens can also be used to pay fees within the network, creating additional demand for custom tokens on its blockchain. After the initial creation of an token, the total tokens supply can be further increased.

# 2. Tokens Operations \(Issue, Reissue and Burn an Token\) {#Tokens(customtokens)-TokensOperations(Issue,ReissueandBurnanToken)}

You can find more details about Token Transactions [here](/development-and-api/neel-node-rest-api/token-transactions.md).

## 2.1 Issue Token Transaction {#Tokens(customtokens)-IssueTokenTransaction}

This transaction is responsible to create a new token depending on the user-specific needs.

| Field | Field Value |
| :--- | :--- |
| Name | \[Token name\] String \[4-16\] - token identification. Does not have to be unique. |
| Details | \[Brief description of the token\] String \[0-1000\] - token description text. |
| Quantity | \[Total number of tokens\] Long - quantity of the tokens issued. The decimal places have to be taken into account, that is Quantity is multiplied by the number of decimal places on API level in order to be able to work only with integer values. |
| Reissuable | \[Possibility of additional issuance which determines if additional tokens can be issued later\]Boolean - a flag which determines if additional tokens can be issued later. |
| Decimals | Byte \[0-8\] - the number of decimal places. |
| Issue Date | \[Token creation date\]. |
| Fee | \[The fees for creating your own tokens is 1 NEEL\] Int - fee offered to the miners. |

## 2.2 Reissue Token Transaction {#Tokens(customtokens)-ReissueTokenTransaction}

Only the token issuer is able to reissue the token if the issuer needs to increase the amount of his total token supply.

| Field | Field Value |
| :--- | :--- |
| Issuer | \[Number of the Neel address from which the token was created\] Array\[Byte\] - txid of the issuing transaction. |
| Identifier | \[Token identifier. Unique value, cannot be repeated\] Array\[Byte\] - in case of reissue of a reissuable token txid of the first issue transaction. |
| Quantity | \[Additional quantity of tokens to issue \(number of indivisible pieces of tokens\)\] Long. |
| Reissue Date | \[Reissue token creation date\]. |
| Fee | \[The fees for creating your own tokens is 1 NEEL\] Int - fee offered to the miners. |

## 2.3 Burn Token {#Tokens(customtokens)-BurnToken}

Any address holding a given token can choose to destroy some or all of the tokens it holds. The token state and skip lists are being recalculated based on the Delete transaction.

| Field | Field Value |
| :--- | :--- |
| Issuer | \[Number of the Neel address from which the token was created\] Array\[Byte\] - txid of the issuing transaction. |
| Quantity | \[Amount of tokens to burn \(number of indivisible pieces of tokens\)\]. |
| Burn Date | \[Burn token deletion date\]. |
| Fee | \[Transaction Fee\]. |

# 3. Pre-ICO Token Sale on Neel DEX {#Tokens(customtokens)-Pre-ICOTokenSaleonNeelDEX}

You need to do the following if you want to pre-sell your ICO tokens on the DEX network:

1. Decide on the amount of desired investment.
2. Set the price for the token.
3. Issue a series of sell orders.

The tokens sold will be automatically available to all clients immediately after investing in your project.

