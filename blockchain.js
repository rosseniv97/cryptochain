const Block = require('./block');

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
    }
}

module.exports = Blockchain;