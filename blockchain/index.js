const Block = require('./block');
const cryptoHash = require('../util/crypto-hash');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock({ data: newData }) {
        const newBlock = Block.mineBlock({
            lastBlock: this.chain[this.chain.length - 1],
            data: newData
        });

        this.chain = [
            ...this.chain,
            newBlock
        ]
    };

    static isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
            return false;
        }

        if (chain.find((block, index) => index && Math.abs(block.difficulty - chain[index - 1].difficulty) > 1)) {
            return false;
        }

        return chain
            .find((block, index) => index && ((block.lastHash !== chain[index - 1].hash) ||
                (cryptoHash(block.data, block.lastHash, block.timestamp, block.difficulty, block.nonce) !== block.hash))) ?
            false : true

    };

    replaceChain(chain) {
        if (chain.length <= this.chain.length) {
            console.error("New chain is not long enough");
            return;
        }

        if (!Blockchain.isValidChain(chain)) {
            console.error("New chain is not valid")
            return;
        }

        console.log("The chain was replaced");

        this.chain = chain;
    }
}

module.exports = Blockchain;