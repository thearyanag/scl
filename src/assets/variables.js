import member_0 from './img/team_member_1.jpg';
import member_1 from './img/team_member_2.jpg';
import member_2 from './img/team_member_3.jpg';
import member_3 from './img/team_member_4.jpg';

import card_0 from './img/green_1.png';
import card_1 from './img/green_2.png';

const projects = [
    {
        picture: member_0,
        name: 'TheForce.Trade',
        status: 'Coming',
        progress: 0,
        swap_rate: 10,
        cap: 7000, access: 'Public', message: 'A data aggregation platform that simplifies DeFi and NFT'
    }, {
        picture: member_1,
        name: 'Greenheart (Blue Diamond Private)',
        status: 'Open',
        progress: 30,
        swap_rate: 13.3,
        cap: 3000,
        access: 'Private',
        message: 'Greenheart is a sustainable DeFi token led by Greenheart CBD - one of Europe\'s leading seed to shelf producers of CBD oil'
    }, {
        picture: member_2,
        name: 'TradeStars (Gold+)',
        status: 'Open',
        progress: 60,
        swap_rate: 20,
        cap: 3000,
        access: 'Private',
        message: 'First DEX for Fantasy Stocks Trading on the blockchain using Fractional NFTs + DeFi Gamification'
    }, {
        picture: member_3,
        name: 'Kryptobellion',
        status: 'Closed',
        progress: 100,
        swap_rate: 30,
        cap: 3000,
        access: 'Private',
        message: 'Speed Card Game Powered by NFTs & Blockchain'
    }
];

const rounds = [
    {
        name: 'for Investors',
        length: 'For investors: Creating a safe environment for investors where tokens are listed with a full disclosure on purchase and sales taxes and the duration of the liquidity lock. Every token listed will have the contract audited to make sure the investors are safe, the liquidity must be locked for at least 1 year and the taxes must be listed for purchases and sales.',
    }, {
        name: 'for Token Creators',
        length: 'Providing smart contract deployment, liquidity locking and marketing on the platform and by attractive marketing to source investors looking for transparency.',
    }, {
        name: 'Roadmap',
        length: 'Our goal is to raise a small but respected amount of money during this presale and launch a token that will be used as a utility token by token creators to pay for marketing services on our platform and for investors to buy and sell as they please. By integrating our listing site and services along with our exchange our business model is to promote our coin as a vetted token on poocoin and get listed on a major exchange as soon as possible.3 hours before Allocation Round opens',
    }
];

const advisors = [
   {
        picture: member_1,
        name: 'RZH',
        position: 'Founder',
        company: ''
    }
];

const stakings = [
    {
        name: 'Number of Stakers',
        value: '5133'
    }, {
        name: 'Total BSCPAD Stacked',
        value: '31957734.60'
    }, {
        name: 'APY',
        value: '0.00'
    }, {
        name: 'Stacked',
        value: '0.0000'
    }, {
        name: 'Unstacked',
        value: '0.0000'
    }, {
        name: 'Rewards',
        value: '0.0000'
    }, {
        name: 'Connected with MetaMask',
        value: 'If not connected, click the "Connect Wallet" button in the top right corner'
    }, {
        name: 'BSCPAD available to deposit',
        value: 'Current Balance: 0.0000'
    }, {
        name: 'BNB available in wallet',
        value: 'BNB is required to pay transaction fees on the Binance Smart Chain network. BNB Balance: 0.0000'
    }, {
        name: 'Eligible to stake',
        value: 'You cannot stake if you have an active BSCPAD unstake/withdrawal request'
    }
];

const cards = [
    {
        name: 'Greenpeace',
        picture: card_0,
        env: 0,
        progress: 50,
        stake: true,
        type: 'project',
    }, {
        name: 'OceanCleanup',
        picture: card_1,
        env: 6513,
        progress: 90,
        stake: false,
        type: 'project',
    }, {
        name: 'OceanCleanup',
        picture: card_1,
        env: 6513,
        progress: 90,
        stake: false,
        type: 'organisation',
    }, {
        name: 'Greenpeace',
        picture: card_0,
        env: 0,
        progress: 50,
        stake: true,
        type: 'organisation',
    }, {
        name: 'Greenpeace',
        picture: card_0,
        env: 0,
        progress: 50,
        stake: true,
        type: 'project',
    }, {
        name: 'OceanCleanup',
        picture: card_1,
        env: 6513,
        progress: 90,
        stake: false,
        type: 'project',
    }, {
        name: 'OceanCleanup',
        picture: card_1,
        env: 6513,
        progress: 90,
        stake: false,
        type: 'organisation',
    }, {
        name: 'Greenpeace',
        picture: card_0,
        env: 0,
        progress: 50,
        stake: true,
        type: 'organisation',
    }
]

export { projects, rounds, advisors, stakings, cards };