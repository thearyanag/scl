import React, { Component } from 'react';

import aboutus from '../../assets/img/aboutus.png';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="container aboutus">
                <h2 className="col-12 text-center font-weight-bold text-white hero-title">About Us</h2>
                <div className="row">
                    <div className="col-md-6 mx-3 mx-md-0">
                        <p className="hero-description font-weight-bold">Why SecureCoinListing?</p>
                        <p className="hero-description text-white font-weight-bold">Our industry lacks regulation and the lack of information provided by token creators to investors has created a huge amount of mistrust. We believe that by being completely transparent and makeing sure all listed tokens have the liquidity locked for at least one year with all sales and purchase taxes listed for each token we can create a more professional and profitable environment for both the investors and token creators..</p>
                        <p className="hero-description">We believe that by being completely transparent and makeing sure all listed tokens have the liquidity locked for at least one year with all sales and purchase taxes listed for each token we can create a more professional and profitable environment for both the investors and token creators.</p><br />

                    </div>
                    <div className="col-md-6 mx-3 mx-md-0 text-center rotation-container">
                        <div className="rotation"></div>
                        <img src={aboutus} alt="about us" />
                    </div>
                </div>
            </div >
        );
    }
}
