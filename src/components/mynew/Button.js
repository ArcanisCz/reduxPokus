import React from 'react';

const Button = (props) => {
    return (
        <div className="component-Button enabled">
            aaa {props.name}
        </div>
    );
};

Button.propTypes = {
    name: React.PropTypes.number.isRequired
};

export default Button;