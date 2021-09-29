import React from 'react';
import PropTypes from 'prop-types';

const Box = ({isBlue, children, className}) => {
    const boxClass = `${isBlue ? 'bg-blue text-white' : 'bg-yellow'} rounded-2xl p-4 mx-auto w-box ${className}`;

    return (
        <div className={boxClass}>
            {children}
        </div>
    );
};

Box.propTypes = {
    isBlue: PropTypes.bool
};

export default Box;
