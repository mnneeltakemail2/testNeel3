# Neel Network Components

# 1. Neel Client

[The Neel Client](https://client.neelplatform.com) can be [easily installed](/neel-client/install-neel-client.md) and used to perform most actions in the Neel Network where users can issue, transfer and trade assets.

# 2. Neel Wallet

* It’s a fully-featured client that lets you access all features of the Neel Network.

* It offers fiat integration, fast speeds, an intuitive interface, and custom tokens. It’s also constantly being updated.

* It allows to store, track, transfer and manage your cryptocurrencies, the Tokens that you issue or the Tokens that you acquire.

* The wallet has a built-in decentralized exchange platform that can be used to exchange assets, cryptocurrencies and fiat tokens.

# 3. Decentralized cryptocurrency exchange \(DEX\)

[_**DEX**_](/platform-features/decentralized-cryptocurrency-exchange-dex.md) allows to place and execute orders for buying or selling cryptocurrency or Tokens for another cryptocurrency or exchanging them to other Tokens.

# 4. Mobile apps

* Neel App is a mobile client for Neel Network available for [iOS](https://itunes.apple.com/us/app/neel-wallet/id1233158971?mt=8) and [Android](https://play.google.com/store/apps/details?id=com.neelplatform.wallet).
* The wallet is connected to public Neel nodes in order to retrieve your transactions and send payments.
* Get started with Neel App for [iOS](/neel-client/mobile-apps/iOS.md) and [Android](/neel-client/mobile-apps/android.md) devices.

# 5. Neel Gateways

Fiat Gateways such as USD/EUR will allow you to exchange any token issued on the Neel network \(or any other cryptocurrency like BTC/ETH/LTC/ZCash/BCH/Dash\) for “real” money, which can be deposited in a bank. All transactions between cryptocurrency to fiat or fiat to cryptocurrency will be recorded on the Neel blockchain. This is like mixing the best of both worlds \(i.e. centralized systems and decentralized systems\).

## 6.1 Fiat Gateways

The Neel US dollar and EUR gateways are available within the Neel Client — allowing anyone to deposit and withdraw USD, EUR and use the backed token within the Neel ecosystem. Neel users can deposit USD and EUR via the secure gateways, receiving in return a token that is 100% backed by USD or EUR reserves. This can be held, transferred and exchanged for other tokens quickly and at low cost, and withdrawn back through the gateway into the traditional financial system when required.

the USD and EUR gateways offer Neel users an easy way to move money into the blockchain ecosystem, enabling them to invest in tokens and ICOs with fiat. This was always one of the key propositions for the Neel Network: the ability to send and trade with fiat-backed tokens.

**Note.** KYC/AML verification is needed to deposit and withdraw fiat money. However, KYC is not necessary for cryptocurrency transactions.

## 6.2 Crypto Gateways

All currencies listed below are integrated in Neel through gateways. You can see gateways as a means to transfer a currency to and from the platform.

Current List of crypto gateways:

* [Transfers and Gateways](/neel-client/wallet-management.md)
* [iOS: Transfers and gateways](/neel-client/mobile-apps/iOS/wallet-management.md)
* [Android: Transfers and gateways](/neel-client/mobile-apps/android/wallet-management.md)

Cryptocurrency gateways can be used to move external currencies into and out of the Neel blockchain. Once the currencies have been confirmed as received by the gateway, the user’s wallet is credited with a Neel token that is 1:1 backed by the cryptocurrency held within the server. See more [What is a payment gateway](/neel-client/frequently-asked-questions-faq/transfers-and-gateways/payment-gateway.md)

Fees are minimal and the only delays are those required by blockchain confirmation times. We are planning to integrate more payment gateways in the future.

![](/_assets/Neel Gateways.png)Figure 1, Neel Crypto Gateways \(current and upcoming\).

# 7. Nodes

Nodes are a critical part of our ecosystem. [Run a Neel node](/neel-full-node/how-to-install-a-node/how-to-install-a-node.md), help process transactions, ask the community to [lease their NEEL](/neel-client/account-management/neel-leasing.md) to you and get paid for securing the network.

**Features:**

* A hosted server is adequate to run a node and no mining rigs or specialist hardware are required.
* It allows to mine NEEL and MRTs \(Miners Reward Tokens\) and to act as a leasing pool to aggregate mining power from other users.
* Receiving rewards from the network by leasing your balance to a full node.

**Note.** The current number of nodes is 168 in 23 different countries.

# 7.1 Mining nodes \(pools\)

* You don’t need any fancy hardware, just a simple hosted server and at least 1,000 Neel.
* You can run a public mining pool and have users lease their funds to you, thereby increasing your profits and sharing them with the community.

You can find the full list of Neel nodes for leasing with their corresponding address [_**HERE.**_](https://forum.neelplatform.com/c/pools)

# 7.2 Official nodes with open API

1. [**NeelGo**](http://www.neelgo.com) is the foremost Neel node, with the biggest balance \(16,214,530 NEEL\) and a thriving community of supporters. The node distributes the NeelGo token to anyone who leases their funds to it.
2. [**Neelnode.NET**](https://neelnode.net)** **represents a developing community in Netherlands with a balance of 10,589,578 NEEL. The node accepts multiple tokens for fees and has a growing list of supporters — as well as offering unique Neel merchandise.

**Note.** You can find a full nodes list at [dev.pyneel.org](http://dev.pyneel.org/generators/) and [Here](https://neelplatform.com/leasing#nodes) you can find a list of the top nodes by NEEL balance.

# 7.3 Matcher nodes

Matcher nodes are responsible for pairing orders and executing trades quickly, whilst they are still settled on the blockchain. You’ll need to send your orders to a Matcher. Orders are transferred to the matcher across an encrypted channel and will not be visible to others until it is executed. This largely eliminates the possibility of market manipulation. These nodes connect the seller to the buyer for a commission, and then fix the transaction in the Neel blockchain.

In principle, **any full node** can become a **Matcher**. Neel client connects to Matchers at [nodes.neelnodes.com](https://nodes.neelnodes.com/) by default.

Matchers will receive fees for the service they provide, adding an additional revenue stream for Neel full nodes.

**Note.** Neel node contains DEX Matcher which can be enabled while settings [the Neel node configuration file](/neel-full-node/how-to-configure-a-node.md) in the section of Matcher Settings.

# 8. MainNet / TestNet

1. **MainNet** - this is the real deal, the live Neel blockchain where you in the worst case could lose money if you are not careful. You can access the mainnet via a full node. it's integrated with the GUI in the Neel client, allowing anyone to use it without any technical knowledge or blockchain downloads.
2. **TestNet **- this is the test version of the Neel blockchain. [here](https://github.com/neelplatform/Neel/releases) you'll find always the latest versions and newest features before they go live.
