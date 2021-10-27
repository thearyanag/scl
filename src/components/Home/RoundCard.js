import React from 'react';

import PropTypes from 'prop-types';

export default function RoundCard({ round }) {
    return (
        <section className="round-card">
            <div className="round-card-header"> {round.name} </div>
            <hr />
            <div className="round-card-body">
                <h5 className="text-white">{round.length}</h5>
            </div>
            <hr />
            {/* <div className="round-card-footer">
                <button type="button" className="btn btn-warning button-large">Learn More</button>
            </div> */}
        </section>
    );
}

RoundCard.propTypes = {
    round: PropTypes.object.isRequired,
}
