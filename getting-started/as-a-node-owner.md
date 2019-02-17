# Getting Started as a Node Owner

1. [Overview](#overview)
2. [Running a Node](#running-a-node)
3. [Installing a Node](#installing-a-node)
4. [Getting Actual Blockchain](#getting-actual-blockchain)
5. [Already a Node Owner](#already-a-node-owner)
6. [Upgrade Your Node](#upgrade-your-node)
7. [Dealing with Forks](#dealing-with-forks)

## Overview

[_**Get to understand what is a Neel full node**_](/neel-full-node/what-is-a-full-node.md), Nodes are a critical part of Neel ecosystem. By Running a Neel node, you help in processing transactions and you will increase your profit for securing the network if users [_**start leasing**_](/neel-client/account-management/neel-leasing.md) their funds to your node \(The more NEEL you lease to a node, the more rewards you will receive, you can lease any sum from 0.002 NEEL\).

The NEEL you own \(or that have been leased to you\) reflect your mining power, the more you own, the higher your chances of processing the next block and receiving the transaction fees as a reward. The final amount will also depend on overall network activity and the level of fees generated.

The Neel full node serves **two critical roles**:

1. To relay blocks and transactions to miners
2. To answer queries for end users about the state of the blockchain.

## Running a Node

There're different options when you want to deal with Neel full node and you will need to [_**check the node configuration**_](/neel-full-node/configuration-parameters.md) before following any option. The balance of the node can be empty until there are enough people wishing to lease to it by reaching together the generating balance of **1000 NEEL**\(the minimum balance\)** **and create together a pool.

### Installing a node

* The easiest way to run a Neel Node is by using the new [_**Neel Docker container**_](/neel-full-node/neel-node-in-docker.md). It requires just **one command** to enable everything or to change the settings of the node.
* The another way is to [_**download the latest version**_ ](https://github.com/neelplatform/Neel/releases)of `neel.jar` and the required `.conf` configuration file \(for mainnet or testnet\) to any folder, for example `~/neel`. You can [_**follow these steps**_](/neel-full-node/how-to-install-a-node/how-to-install-a-node.md) of installing a node depending on your operating system.

{% prettyhint type="info" %} Please check <a href="/neel-full-node/how-to-install-a-node/how-to-install-a-node.md"> &nbsp;The Activation Process of New features. </a> {% endprettyhint %}


### **Getting actual blockchain**

After installing a node, you will have different ways to get the blockchain. follow the [_**getting blockchain guide**_](/neel-full-node/options-for-getting-actual-blockchain.md).

## Already a node owner

If you're already a node owner, you will need to check the new updates and then go for one of these two options:

### Upgrade your node

Basically, the node should be upgraded by following the [_**upgrading instructions**_](/neel-full-node/upgrading.md).

### Dealing with Forks 

You can check the blockchain height or the last 100 signatures of blocks to understand if your node is on fork or not.

Your node can be in one of two possibilities: your node on fork with height **less** than 2000 blocks or **more** than 2000 blocks**.**  
In case that your node is on fork with a height less than 2000 blocks, here you can implement **rollback**_** **through _[**rollback instructions**](/neel-full-node/how-to-rollback-a-node.md). Otherwise, you need to choose an [_**option for Getting Actual Blockchain**_](/neel-full-node/options-for-getting-actual-blockchain.md).

{% prettyhint type="info" %} If you're interested in joining the Testnet, you will need to follow these steps for <a href="/neel-full-node/joining-testnet.md"> &nbsp;Joining The Testnet. </a> {% endprettyhint %}



