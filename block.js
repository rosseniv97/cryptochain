const { GENESIS_DATA, MINED_RATE } = require('./config');
const cryptoHash = require('./crypto-hash');

class Block {
    constructor({ timestamp, lastHash, hash, data, difficulty, nonce }) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.difficulty = difficulty;
        this.nonce = nonce;
    }

    static genesis() {
        return new Block(GENESIS_DATA);
    }

    static mineBlock({ lastBlock, data }) {
        let timestamp;
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;

        let hash;
        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({ originalBlock: lastBlock, timestamp });
            hash = cryptoHash(nonce, timestamp, lastHash, data, difficulty);
        } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty))

        return new this({
            timestamp,
            lastHash,
            hash,
            data,
            nonce,
            difficulty
        })
    }

    static adjustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;

        return difficulty > 0 ? timestamp - originalBlock.timestamp > MINED_RATE ?
            difficulty - 1 : difficulty + 1 : 1;
    }
}

module.exports = Block;