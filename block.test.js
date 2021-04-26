const Block = require('./block');
const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

describe('Block', () => {
    const timestamp = 'a-date';
    const lastHash = 'l-hash';
    const hash = 'hash';
    const data = 'data';
    const block = new Block({
        timestamp,
        lastHash,
        hash,
        data
    });

    it('has a timestamp, lastHash, data property', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);

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

        it('creates a sha256 hash based on proper inputs', () => {
            expect(minedBlock.hash)
                .toEqual(cryptoHash(minedBlock.timestamp, lastBlock.hash, data))
        })
    });
});