
import React from 'react';

    // Import dependencies
    const bip32 = require('bip32')
    const bip39 = require('bip39')
    const bitcoin = require('bitcoinjs-lib')
    

    // Define the network
    const network = bitcoin.networks.bitcoin // Use networks.testnet for testnet

    // Derivation path
    const path = `m/84'/0'/0` // Use m/44'/0'/0' for testnet

    const mnemonic = bip39.generateMnemonic()
    const seed = bip39.mnemonicToSeedSync(mnemonic)
    const root = bip32.fromSeed(seed, network)

    const account = root.derivePath(path)
    const node = account.derive(0).derive(0)
    const publicKey = node.publicKey.toString('hex')
    const privateKey = node.toWIF()

    // using p2wpkh which is used for native segWit
    const btcAddress = bitcoin.payments.p2wpkh({
        pubkey: node.publicKey,
        network: network,
    }).address

    console.log(btcAddress)

    console.log(node.toWIF())
    console.log(publicKey)
    console.log(privateKey)


export default class BIP32generator extends React.Component {

    constructor(props) {
        super(props)

        // Set initial state
        this.state = { msg: 'BIP39 Generator' }

        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

        // Changing state
        this.setState({ mnemonic })
        this.setState({ btcAddress })
        this.setState({ publicKey })
        this.setState({ privateKey })
    }

    render() {
        return (
            <div>
                <h2>Message :</h2>

                <p>Mnemonic: {this.state.mnemonic}</p>
                <p>btcAddress: {this.state.btcAddress}</p>
                <p>publicKey: {this.state.publicKey}</p>
                <p>privateKey: {this.state.privateKey}</p>

                {/* Set click handler */}
                <button onClick={this.handleClick}>
                    Click here!
                </button>
            </div>
        )
    }
}