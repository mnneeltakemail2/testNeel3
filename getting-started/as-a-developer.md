# Getting Started as a Developer

1. [Overview](#overview)
2. [Client Libraries](#client-libraries)
3. [Node REST API](#node-rest-api)
4. [Smart Contracts](#smart-contracts)
5. [DEX API](#dex-api)
6. [Keeper API](#keeper-api)

## Overview

This page introduces you to the things you'll need to get started on your journey.

This will give you all the information you need as a developer to get started in an easy to read and concise format.

## Client Libraries

Neel Client is supported by many libraries, please Get to know our client libraries\_** **\_and use them depending on which language you're familiar with:

* [_**Python: PyNeel**_](/development-and-api/client-libraries/pyneel.md)
* [_**Java: NeelJ**_](/development-and-api/client-libraries/neelj.md)
* [_**C\#: NeelCS**_](/development-and-api/client-libraries/neelcs.md)
* [_**TypeScript/JavaScript, Neel Signature Adapter**_](/development-and-api/client-libraries/neel-signature-adapter.md) and [_**Neel Transactions**_](#)
* [_**C: NeelC**_](/development-and-api/client-libraries/neel-c.md)
* [_**Community Libraries**_](/development-and-api/client-libraries/unofficial-libraries.md)

## Node REST API

[_**The Neel Node API**_](/development-and-api/neel-node-rest-api.md) provides RESTful platform for implementing blockchain functionality in apps using Neel blockchain.

Use the API to integrate a variety of functionalities including orders, transaction history, and balances.

## Smart Contracts

Usually as a developer, you will need two things: **theoretical understanding** and **tools** to make your coding life easier, in our guide we will provide you with both:

### _**Theoretical Understanding **_

You will need to know:

* How Neel smart contract works \(You can go through our [_**smart contract guide**_](/technical-details/neel-contracts-language-description.md) to get more information about it\) and you can read about our [_**smart accounts**_](/technical-details/neel-contracts-language-description/approach-and-capabilities.md) and [_**smart assets.**_](/technical-details/smart-assets.md)

* Which programming language to use \(we're using our own language which called RIDE, [_**Get to know RIDE**_](/technical-details/ride-language.md)_**\)**_.

let's suppose now that you understand the main idea of our smart contracts and you want to go through all functions and to understand how they work, please find here our [_**functions and standard library**_](/technical-details/neel-contracts-language-description/standard-library.md).

### _**Tools to help you with RIDE**_

In Neel, we always think about the best way to help external developers and because of that we will provide you with some useful tools:

* [_**Neel IDE **_](https://ide.neelplatform.com), Try out the new non-turing complete Neel smart contract language Ride by using our IDE.
* [_**Neel console and its commands**_](/technical-details/neel-contracts-language-description/neel-console-commands.md), Neel IDE has a Neel console feature which supports different commands.
* [_**Get to our Tutorials**_](/technical-details/video-tutorials-and-articles.md), We believe that the best way to learn is by practical examples.

## DEX API

The reason behind decentralized exchange is to perform secure exchange of assets issued on Neel network.

The real-time trading is achieved thanks to the only centralized design element of our DEX - the order book Matcher, which matches incoming orders and execute trades at high speed, typically within milliseconds. There is no need to wait for the next block to know whether a trade has been executed successfully, this provides speed at the level of centralized exchange and the security of the decentralized protocol.

Please take a look to [_**Neel DEX API **_](/development-and-api/dex-api/matcher.md)for more details and get the theoretical details by reading our [_**DEX article**_](/platform-features/decentralized-cryptocurrency-exchange-dex.md)_**.**_

## Keeper API

Check the new [_**Neel Keeper**_](/development-and-api/neel-keeper-api/neel-keeper-api.md)_** **_browser extension which turns your browser into a keychain that enables you to sign transactions securely on third-party web resources without entering your seed or password. So now, if a Neel-integrated website or Dapp requires you to sign a transaction, you can do it with just a couple of clicks, right in your browser.

The extension will be particularly _**useful to developers**_ who want to embed Neel functionality in their projects, because it supports the Auth and Payment APIs. For testing purposes you can switch between using it on MainNet and TestNet.

