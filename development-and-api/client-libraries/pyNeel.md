# PyNeel
PyNeel is an object-oriented Python interface to the Neel blockchain platform. The library is developing by community and open source. Latest documentation and examples can be found in [Github repository](https://github.com/PyNeel/PyNeel/). 

## Getting Started

You can install PyNeel using:

    pip install pyneel

## Documentation

The library utilizes classes to represent various Neel data structures:

- pyneel.Address
- pyneel.Asset
- pyneel.AssetPair
- pyneel.Order

#### Code Example
```python
import pyneel as pw

myAddress = pw.Address(privateKey='CtMQWJZqfc7PRzSWiMKaGmWFm4q2VN5fMcYyKDBPDx6S')
otherAddress = pw.Address('3PNTcNiUzppQXDL9RZrK3BcftbujiFqrAfM')
myAddress.sendNeel(otherAddress, 10000000)
myToken = myAddress.issueAsset('Token1', 'My Token', 1000, 0)
while not myToken.status():
	pass
myAddress.sendAsset(otherAddress, myToken, 50)

```



### Source code
[PyNeel Github repository](https://github.com/PyNeel/PyNeel/)
