# Neel Java Library

It's a [Java library](https://github.com/neelplatform/NeelJ) for interacting with the Neel blockchain.

Supports node interaction, offline transaction signing, Matcher orders, and creating addresses and keys.

## Using Neel Java Library in your project

Use the codes below to add Neel Java Library as a dependency for your project.

##### Maven:

```js
<dependency>
    <groupId>com.neelplatform</groupId>
    <artifactId>neelj</artifactId>
    <version>0.8</version>
</dependency>
```

##### Gradle:

```
compile group: 'com.neelplatform', name: 'neelj', version: '0.2'
```

##### SBT:

```
libraryDependencies += "com.neelplatform" % "neelj" % "0.2"
```

[This library's page at Maven Central](https://mvnrepository.com/artifact/com.neelplatform/neelj)

## Basic Usage

Create an account from a private key \('T' for testnet\):

```java
String seed = "health lazy lens fix dwarf salad breeze myself silly december endless rent faculty report beyond";
PrivateKeyAccount account = PrivateKeyAccount.fromSeed(seed, 0, Account.TESTNET);
byte[] publicKey = account.getPublicKey();
String address = account.getAddress();
```

Create a Node and learn a few things about blockchain:

```java
Node node = new Node("https://my.neel.node/");
System.out.println("Current height is " + node.getHeight());
System.out.println("My balance is " + node.getBalance(address));
System.out.println("With 100 confirmations: " + node.getBalance(address, 100));
```

Send some money to a buddy:

```java
String buddy = "3N9gDFq8tKFhBDBTQxR3zqvtpXjw5wW3syA";
String txId = node.transfer(account, buddy, 1_00000000, 100_000, "Here's for you");
```

Sign a transaction offline:

```java
Transaction tx = Transaction.makeTransferTx(account, buddy, 1_00000000, Asset.NEEL, 100_000, Asset.NEEL, "");
System.out.println("JSON encoded data: " + tx.getJson());
System.out.println("Server endpoint to send this JSON to: " + tx.getEndpoint());
```

Now send it from an online machine:

```java
node.send(tx);
```

Create a DEX order:

```java
Node matcher = new Node("https://testnode2.neelnodes.com");
String matcherKey = matcher.getMatcherKey();
String wbtcId = "Fmg13HEHJHuZYbtJq8Da8wifJENq8uBxDuWoP9pVe2Qe";
Order order = matcher.createOrder(alice, matcherKey,
                new AssetPair(Asset.NEEL, wbtcId),
                // buy 10 NEEL at 0.00090000 WBTC each
                Order.Type.BUY, 90_000, 10 * Asset.TOKEN,
                // make order valid for 1 hour
                System.currentTimeMillis() + 3_600_000, MATCHER_FEE);
System.out.printf("Filed order " + order.id);
```

There are some examples under`src/examples/java`.

## Building the library

To build from scratch, run

```bash
mvn clean package
```

The outputs are placed under the`target`directory.

