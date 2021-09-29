import React from 'react';
import PropTypes from "prop-types";
//
// font-family: Roboto;

const Title = ({text}) => {
    return (
        <div className="relative w-box m-auto">
            <div className="z-10">
                <h2 className="text-blue text-h2 font-bold uppercase">
                    {text}
                </h2>
            </div>
            <div className="absolute -top-5 left-5 -z-1 opacity-30">
                <h3 className="text-h2 text-yellow font-bold uppercase">
                    {text}
                </h3>
            </div>
        </div>
    );
};

Title.propTypes = {
    text: PropTypes.string
}

export default Title;
