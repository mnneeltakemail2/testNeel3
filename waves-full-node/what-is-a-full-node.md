# Waves Full Node

This section contains all information about Installing, configuring and upgrading a Waves Full Node.

1. [How To Install a node](/waves-full-node/how-to-install-a-node/how-to-install-a-node.md)
2. [Options for Getting Actual Blockchain](/waves-full-node/options-for-getting-actual-blockchain.md)
3. [State Downloading and Applying](/waves-full-node/options-for-getting-actual-blockchain/state-downloading-and-applying.md)
4. [Export and Import From The Blockchain](/waves-full-node/options-for-getting-actual-blockchain/export-and-import-from-the-blockchain.md)
5. [Upgrading](/waves-full-node/upgrading.md)
6. [How to Rollback a Node](/waves-full-node/how-to-rollback-a-node.md)
7. [Waves Node in Docker](/waves-full-node/waves-node-in-docker.md)
8. [How to Configure a node](/waves-full-node/how-to-configure-a-node.md)
9. [Logging Configuration](/waves-full-node/logging-configuration.md)
10. [Joining Testnet](/waves-full-node/joining-testnet.md)

# Waves Network Structure

The structure of the peer-to-peer network impacts the security and performance of cryptocurrencies. A geographically clustered network can quickly propagate a new block to many other nodes. This makes it more difficult for a malicious miner to propagate conflicting blocks/transactions quicker than honest nodes.

However, a less clustered network may mean that full nodes are being run by a wider variety of users which is also good for decentralization.

Waves has a peer-to-peer network for disseminating block and transaction information.

Any computer running blockchain software is considered a node of that blockchain.

Waves also contain full nodes allowing anyone to take part in the decentralized process of block creation.

The Waves full node serves two critical roles:

1. To relay blocks and transactions to miners
2. To answer queries for end users about the state of the blockchain.

# The Importance of a Full Node

The job of a full node is to store the blockchain data, pass along the data to other nodes, and ensure newly added blocks are valid. Validation entails ensuring that the format of the block is correct, all hashes in the new block were computed correctly, the new block contains the hash of the previous block, and each transaction in the block is valid and signed by the appropriate parties. Full nodes may also act as mining nodes \(i.e., generating new blocks\), The mining node checks that each transaction is self-valid since the other nodes would reject the block if it included invalid transactions.

Any node may propose new transactions, and these proposed transactions are propagated between nodes until they are eventually added to a block.

**Note.** You can find a full nodes list at [dev.pywaves.org](http://dev.pywaves.org/generators/) and [Here](https://wavesplatform.com/leasing#nodes) you can find a list of the top nodes by WAVES balance.

