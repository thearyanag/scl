import React, { Component } from 'react';

import img from '../../assets/img/round2.png';

export default class Round2 extends Component {
    render() {
        return (
            <div className="container round">
                <h2 className="col-12 text-center font-weight-bold round-title">Tokenomics</h2>
                <div className="row">
                    <div className="col-md-6 mx-3 mx-md-0 text-center">
                        <img src={img} alt="network" />
                    </div>
                    <div className="col-md-6 mx-3 mx-md-0">

                    <p className="hero-description font-weight-bold">SoftCap - 75 BNB , HardCap - 150 BNB</p>
                    <p className="hero-description font-weight-bold">Token Distribution : SoftCap :- 25% , HardCap :- 50%</p>
                    <p className="hero-description font-weight-bold">Marketing :- 10%</p>
                    <p className="hero-description font-weight-bold">Exchange Listing Cost :- 10%</p>
                    <p className="hero-description font-weight-bold">Dev Wallet :- 10%</p>


                        <p className="hero-description">We launch if the minimum softcap is achieved. Either way hardcap percentage will be in the liquidity pool.</p>


                        <p className="hero-description">Market cap expected at launch minimum $50,000 making achieving 1 million market cap extremely easy.

Token will immediately be listed on a centralised exchange and LP on pancakeswap meaning the amount of investors available will be significantly higher than an average launch.</p>

                        <p className="hero-description">Our liquidity will be locked for 36 months.</p>
                    </div>
                </div>
            </div >
        );
    }
}
