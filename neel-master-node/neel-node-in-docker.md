# Neel Node in Docker 

The easiest way to **run a Neel Node** is by using the new **Neel Docker container**. It requires just **one command** to enable everything or to change the settings of the node.

## Prerequisites

You need to install the latest version of Docker.

Please, follow installation istructions at [Docker Site](https://docs.docker.com/engine/installation/).

## About the image

* This Docker image contains scripts and configs to run Neel Node from **Version 0.13.0 **for TESTNET, MAINNET or CUSTOM networks.
* The image is focused on fast and convenient deployment of Neel Node.
* Container downloads `.jar` file and configuration files from the [releases section](https://github.com/neelplatform/Neel/releases) and runs it.

## Running the image

It is highly recommended to read more about [Neel Node configuration](https://docs.neelplatform.com/en/neel-full-node/how-to-configure-a-node.html) before running the container.

The simplest way to run a container:
```
docker run -it neelplatform/node
```

**Note: We recommend to start a container like below for MAINNET:**
```
docker run -p 6869:6869 -p 6868:6868 -e NEEL_NETWORK=MAINNET -e NEEL_LOG_LEVEL=DEBUG -e NEEL_HEAP_SIZE=2g -v YOUR_LOCAL_PATH_HERE:/neel neelplatform/node    
```

**For TESTNET:**
```
docker run -p 6869:6869 -p 6863:6863 -e NEEL_NETWORK=TESTNET -e NEEL_LOG_LEVEL=DEBUG -e NEEL_HEAP_SIZE=2g -v YOUR_LOCAL_PATH_HERE:/neel neelplatform/node    
```

**You can run container with predefined environment variables:**

|Env variable                 |Description   |
|-----------------------------|--------------|
|`NEEL_WALLET_SEED`               |Plain text seed for node wallet. Container converts it to base58.   |
|`NEEL_WALLET_SEED_BASE58`        |Base58 encoded seed.   |
|`NEEL_WALLET_PASSWORD`           |Password for wallet file.    |
|`NEEL_VERSION`                   |Node version. Default value is `latest`. You can find the list of available versions [here](https://github.com/neelplatform/Neel/releases).|
|`NEEL_NETWORK`                   |Available values are `MAINNET` and `TESTNET`.   |
|`NEEL_LOG_LEVEL`                 |Node logging level, available values: `OFF`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`. More details about logging are available [here](https://docs.neelplatform.com/en/neel-full-node/logging.html).   |
|`NEEL_HEAP_SIZE`                 |Java Heap Size limit in -X Command-line Options notation (`-Xms=[your value]`). More details [here](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html)   |
|`NEEL_CONFIG_FILE`               |Path to your Neel Configuration file.   |
|`NEEL_DECLARED_ADDRESS`          |String with IP address and port to send as external address during handshake. Could be set automatically if UPnP is enabled. If `declared-address` is set, which is the common scenario for nodes running in the cloud, the node will just listen to incoming connections on `bind-address:port` and broadcast its `declared-address` to its peers.|
|`NEEL_AUTODETECT_ADDRESS`        |Set `yes` if you want to get your public address and set value `declared-address` with it.|
|`NEEL_AUTODETECT_ADDRESS_PORT`   |`NEEL_AUTODETECT_ADDRESS` can get only an IP address of the node, but not port number, so define your real port number with this variable.|

**Note: All variables are optional.**  

## Configuration

The image supports config customization with env variables.
Depending on env values the image generates `local.conf` file and stores it in `/neel/configs` directory.
The simple rule of how to set a value in the configuration file:
0. Determine the path to variable in configuration file ([complete configuration file](https://docs.neelplatform.com/en/neel-full-node/how-to-configure-a-node.html))
1. Join all section names with two underscores(`__`).
2. Replace all dashes with one underscore (`_`).
3. Capitalize the final string.

For instance, if you want to set the value of `neel.rest-api.enable`, pass an environment variable `NEEL__REST_API__ENABLE=no`;
