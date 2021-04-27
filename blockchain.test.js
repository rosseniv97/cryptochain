const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
    let blockchain, newChain, originalChain;

    beforeEach(() => {
        blockchain = new Blockchain();
        newChain = new Blockchain();

        originalChain = [...blockchain.chain];

    })

    it('contains a Blockchain instance', () => {
        expect(blockchain.chain instanceof Array).toBe(true);
    });

    it('starts with a genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block to the chain', () => {
        const newData = 'foo';
        blockchain.addBlock({ data: newData });

        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
    });

    describe('isValidChain()', () => {
        describe("when the chain doesn't start with the genesis block", () => {
            it('returns false', () => {
                blockchain.chain[0] = { data: 'fake genesis' };

                expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
            });
        });

        describe("when the chain does start with the genesis block and has multiple blocks", () => {
            describe('and a lastHash reference has changed', () => {
                it('returns false', () => {
                    blockchain.addBlock({ data: 'Andrew' });
                    blockchain.addBlock({ data: 'Ross' });
                    blockchain.addBlock({ data: 'Peter' });

                    blockchain.chain[2].lastHash = 'broken-lastHash';

                    expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
                });
            });

            describe('and the chain contains a block with an invalid field', () => {
                it('returns false', () => {
                    blockchain.addBlock({ data: 'Andrew' });
                    blockchain.addBlock({ data: 'Ross' });
                    blockchain.addBlock({ data: 'Peter' });

                    blockchain.chain[2].data = 'bad-wrong-data';

                    expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
                });
            });

            describe("and the chain doesn't contain invalid blocks", () => {
                it('returns true', () => {
                    blockchain.addBlock({ data: 'Andrew' });
                    blockchain.addBlock({ data: 'Ross' });
                    blockchain.addBlock({ data: 'Peter' });

                    expect(Blockchain.isValidChain(blockchain.chain)).toBe(true);
                });
            })
        });
    });

    describe('replaceChain()', () => {
        let errorMock, logMock;

        beforeEach(() => {
            errorMock = jest.fn();
            logMock = jest.fn();

            global.console.log = logMock;
            global.console.error = errorMock;
        })

        describe('when the new chain is not longer', () => {
            beforeEach(() => {
                newChain.chain[0] = { new: 'chain' };
                blockchain.replaceChain(newChain.chain);
            });

            it('does not replace the chain', () => {
                expect(blockchain.chain).toEqual(originalChain);
            });

            it('logs an error', () => {
                expect(errorMock).toHaveBeenCalled();
            });
        });

        describe('when the new chain is longer', () => {
            beforeEach(() => {
                newChain.addBlock({ data: 'Andrew' });
                newChain.addBlock({ data: 'Ross' });
                newChain.addBlock({ data: 'Peter' });
            })
            describe('and the chain is invalid', () => {
                beforeEach(() => {
                    newChain.chain[2].data = 'bad-wrong-data';
                    blockchain.replaceChain(newChain.chain);
                });

                it('does not replace the chain', () => {
                    expect(blockchain.chain).toEqual(originalChain);
                });

                it('logs an error', () => {
                    expect(errorMock).toHaveBeenCalled();
                });
            });
            describe('and the chain is valid', () => {

                beforeEach(() => {
                    blockchain.replaceChain(newChain.chain);
                });

                it('replaces the chain', () => {
                    expect(blockchain.chain).toEqual(newChain.chain);
                });

                it('logs a chain replacement', () => {
                    expect(logMock).toHaveBeenCalled();
                });
            });
        });

    })
});