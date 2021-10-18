import React from 'react';
import PropTypes from 'prop-types';

const Box = ({isBlue, children, className}) => {
    const boxClass = `${isBlue ? 'bg-blue text-white' : 'bg-yellow'} rounded-2xl md:p-4 p-2 mx-auto md:w-box ${className}`;

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
