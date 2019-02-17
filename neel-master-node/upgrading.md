# Upgrading

1. First of all, you need to check the[ latest Neel Release.](https://github.com/neelplatform/Neel/releases) and choose the latest Mainnet release.
2. Download the DEB or Jar file depending on your operating system.
3. Upgrade DEB by running the following command:
   ```bash
   sudo dpkg -i neel_X.Y.Z_all.deb
   ```
4. Or upgrade JAR by copying the new version over the old one
5. Check the release notes. If there are new features to vote and activate, you will need to include that in the config.

## Upgrading the Node

Basically, the node should be upgraded as follows:  
1. Stop the node  
2. Export all existing blocks in the blockchain to a binary file. Please read [the documentation about export and import of the blockchain.](/neel-full-node/export-and-import-from-the-blockchain.md) or download the binary file.  
3. Update node's executables  
4. Import binary file  
5. Start the node

## Upgrading the Node to the Latest Version on Linux

1. Stop the Node by executing the following command:
   ```bash
   sudo systemctl stop neel
   ```
2. After stopping the node execute following command to export existing blocks to a binary file:
   ```bash
   sudo -u neel exporter /etc/neel/neel.conf /usr/share/neel/mainnet
   ```
3. Remove data folder:
   ```bash
   sudo rm -rdf /var/lib/neel/data
   ```
4. Install the new version of the node:
   ```bash
   sudo dpkg -i neel_X.Y.Z_all.deb
   ```
5. Import blocks from the binary file:
   ```bash
   sudo -u neel importer /etc/neel/neel.conf /usr/share/neel/mainnet-[some height]
   ```
6. After import start the node:
   ```bash
   sudo systemctl start neel
   ```
7. Do not forget to remove binary blockchain files if you don't need them any more:
   ```bash
   sudo rm /usr/share/neel/mainnet-[some height]
   ```

## Update the Configuration

Please, read the updated [documentation of Neel node configuration file](/neel-full-node/how-to-configure-a-node.md)



