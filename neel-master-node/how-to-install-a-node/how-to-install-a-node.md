# Structure

1. [How to Install a node](#how-to-install-a-node)
2. [System Requirements](#system-requirements)
3. [Activation Process of New Features](#activation-process-of-new-features)

# How to Install a Node

To run the Neel node have to go through 2 steps:

1. Install the JRE 1.8 \(**64-bit version**\).
2. Download Neel package and configure the application.

**P.S.** you can check Neel Releases [Here](https://github.com/neelplatform/Neel/releases).

**Prior to the launch of your nodes, make sure you read the **[**configuration specification**](/neel-full-node/configuration-parameters.md)**! The default configuration does not contain the safest solution!**

More specific steps depend on your operating system:

* [On Mac](/neel-full-node/how-to-install-a-node/on-mac.md)
* [On Windows](/neel-full-node/how-to-install-a-node/on-windows.md)
* [On Ubuntu](/neel-full-node/how-to-install-a-node/on-ubuntu.md)

Here you can find a tutorial about [Installing Neel Node](https://www.youtube.com/watch?v=CDmMeZlzKbk&feature=youtu.be).

# System Requirements

|  | vCPU | RAM | SSD | Command as Jar |
| :--- | :--- | :--- | :--- | :--- |
| Minimal Requirements | 1 | 3Gb | 30Gb | **Xmx** flag Specifies the maximum size of the memory allocation pool for a Java virtual machine (JVM), Add _**-Xmx**_ option before _**-jar**_ parameter, Choose size depending on your host RAM. The command should be as following <br/>**java -Xmx3072M -jar** |
| Recommended Configuration | 2+ | 4+ Gb | 30+ Gb | _**java -Xmx4096M -jar**_ |

**Note.** A common use for **Xmx** flag is when you encounter a `java.lang.OutOfMemoryError`.
# Activation Process of New Features

When some new feature is developed and released, it must be activated.

* Activation process consists of "**voting**" period and "**activation**" period. Each mining node \(which generates blocks\) can set in its configuration a parameter to vote for this new feature. After that all blocks generated by such a node contain the vote for the feature.

* Every 3000 blocks on testnet \(10000 blocks on mainnet\) - it's an **election period**. If there are not less than 2700 blocks on testnet \(8000 blocks on mainnet\) with support of the feature during the election period, the feature becomes "**voted**". After it's "**voted**" there is a period of "**activation**" - 3000 blocks for testnet \(10000 blocks for mainnet\). After they all passed, the feature start working. At this moment all nodes which can not supports such feature \(old versions\) stops.




