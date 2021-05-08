const hexToBinary = require('hex-to-binary');
const Block = require('./block');
const { GENESIS_DATA, MINED_RATE } = require('./config');
const cryptoHash = require('./crypto-hash');

describe('Block', () => {
    const timestamp = 2000;
    const lastHash = 'l-hash';
    const hash = 'hash';
    const data = 'data';
    const nonce = 1;
    const difficulty = 1;
    const block = new Block({
        timestamp,
        lastHash,
        hash,
        data,
        nonce,
        difficulty
    });

    it('has a timestamp, lastHash, data property', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
        expect(block.nonce).toEqual(nonce);
        expect(block.difficulty).toEqual(difficulty);

    });

    describe('genesis()', () => {
        const genesisBlock = Block.genesis();

        it('return a Block instance', () => {
            expect(genesisBlock instanceof Block).toBe(true);
        })

        it('return genesis data', () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        })
    })

    describe('mineBlock()', () => {
        const lastBlock = Block.genesis();
        const data = 'mined block';
        const minedBlock = Block.mineBlock({ lastBlock, data });

        it('returns  a Block instance', () => {
            expect(minedBlock instanceof Block).toBe(true);
        });

        it('sets the lasthash to be the hash of the last block', () => {
            expect(minedBlock.lastHash).toEqual(lastBlock.hash);
        });

        it('sets the data', () => {
            expect(minedBlock.data).toEqual(data);
        });

        it('sets timestamp', () => {
            expect(minedBlock.timestamp).not.toEqual(undefined);
        });

        it('sets a `hash` that matches the difficulty criteria', () => {
            expect(hexToBinary(minedBlock.hash).substring(0, minedBlock.difficulty))
                .toEqual('0'.repeat(minedBlock.difficulty));
        });

        it('adjusts the difficulty', () => {
            const possibleResults = [lastBlock.difficulty + 1, lastBlock.difficulty - 1];

            expect(possibleResults.includes(minedBlock.difficulty)).toBe(true);
        })

        it('creates a sha256 hash based on proper inputs', () => {
            expect(minedBlock.hash)
                .toEqual(
                    cryptoHash(
                        minedBlock.timestamp,
                        minedBlock.difficulty,
                        minedBlock.nonce,
                        lastBlock.hash,
                        data
                    ));
        })
    });

    describe('adjustDifficulty()', () => {
        it('raises the difficulty of a quickliy mined block', () => {
            expect(Block.adjustDifficulty({
                originalBlock: block,
                timestamp: block.timestamp + MINED_RATE - 100
            })).toEqual(block.difficulty + 1);
        });

        it('lower the difficulty of a slowly mined block', () => {
            expect(Block.adjustDifficulty({
                originalBlock: block,
                timestamp: block.timestamp + MINED_RATE + 100
            })).toEqual(block.difficulty - 1);
        });

        it('has a lower limit of 1', () => {
            block.difficulty = -1;

            expect(Block.adjustDifficulty({ originalBlock: difficulty })).toEqual(1);
        });
    })
});