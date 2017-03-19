
//  Library
import React, { PropTypes } from 'react';


const Header = (props) => {
  const { children, className } = props;

  return (
    <header className={`bar bar-nav ${className}`}>
      {children}
    </header>
  );
};


Header.propTypes = {
  className: PropTypes.string,
};


Header.defaultProps = {
  className: '',
};


export default Header;
