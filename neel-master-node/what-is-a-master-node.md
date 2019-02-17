# Neel Master Node

This section contains all information about Installing, configuring and upgrading a Neel Master Node.

1. [How To Install a node](/neel-master-node/how-to-install-a-node/how-to-install-a-node.md)
2. [Upgrading](/neel-master-node/upgrading.md)
3. [Logging Configuration](/neel-master-node/logging-configuration.md)
4. [How to Configure a node](/neel-master-node/how-to-configure-a-node.md)
5. [Neel Node in Docker](/neel-master-node/neel-node-in-docker.md)
6. [How to Rollback a Node](/neel-master-node/how-to-rollback-a-node.md)
7. [State Downloading and Applying](/neel-master-node/options-for-getting-actual-blockchain/state-downloading-and-applying.md)
8. [Export and Import From The Blockchain](/neel-master-node/options-for-getting-actual-blockchain/export-and-import-from-the-blockchain.md)
9. [Options for Getting Actual Blockchain](/neel-master-node/options-for-getting-actual-blockchain.md)

# Neel Network Structure

The structure of the peer-to-peer network impacts the security and performance of cryptocurrencies. A geographically clustered network can quickly propagate a new block to many other nodes. This makes it more difficult for a malicious miner to propagate conflicting blocks/transactions quicker than honest nodes.

However, a less clustered network may mean that master nodes are being run by a wider variety of users which is also good for decentralization.

Neel has a peer-to-peer network for disseminating block and transaction information.

Any computer running blockchain software is considered a node of that blockchain.

Neel also contain master nodes allowing anyone to take part in the decentralized process of block creation.

The Neel master node serves two critical roles:

1. To relay blocks and transactions to miners
2. To answer queries for end users about the state of the blockchain.

# The Importance of a Master Node

The job of a master node is to store the blockchain data, pass along the data to other nodes, and ensure newly added blocks are valid. Validation entails ensuring that the format of the block is correct, all hashes in the new block were computed correctly, the new block contains the hash of the previous block, and each transaction in the block is valid and signed by the appropriate parties. Master nodes may also act as mining nodes \(i.e., generating new blocks\), The mining node checks that each transaction is self-valid since the other nodes would reject the block if it included invalid transactions.

Any node may propose new transactions, and these proposed transactions are propagated between nodes until they are eventually added to a block.

**Note.** You can find a master nodes list at [dev.pyneel.org](http://dev.pyneel.org/generators/) and [Here](https://neelplatform.com/leasing#nodes) you can find a list of the top nodes by NEEL balance.

