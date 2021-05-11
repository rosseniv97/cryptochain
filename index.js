const express = require('express');
const request = require('request');
const path = require('path');

const Blockchain = require('./blockchain');
const PubSub = require('./app/pubsub');

const app = express();
const blockchain = new Blockchain();
const pubsub = new PubSub({ blockchain });

const DEFAULT_PORT = 3000;
const ROOT_NODE_ADDRESSS = `http://localhost:${DEFAULT_PORT}`;

app.use(express.json());

app.get('/api/blocks', (req, res) => {
    res.json(blockchain.chain);
});

app.post('/api/mine', (req, res) => {
    const { data } = req.body;

    blockchain.addBlock({ data });

    pubsub.broadcastChain();

    res.redirect('/api/blocks');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});

const syncChain = () => {
    request({ url: `${ROOT_NODE_ADDRESSS}/api/blocks` }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const rootChain = JSON.parse(body);

            console.log(`synced with rootchain:`, rootChain);
            blockchain.replaceChain(rootChain);
        }
    });
};

let PEER_PORT;

if (process.env.GENERATE_PEER_PORT === 'true') {
    PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);
}

const PORT = PEER_PORT || DEFAULT_PORT;
app.listen(PORT, () => {
    console.log(`Server is listening at localhost:${PORT}`);
    if (PORT !== DEFAULT_PORT) {
        syncChain();
    }

})