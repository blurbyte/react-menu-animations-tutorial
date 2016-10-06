import React, {PropTypes} from 'react';

//icon
import {HamburgerIcon} from '../common/Icons';

const styles = require('./HamburgerButton.css');

const HamburgerButton = ({onHamburgerClick}) => (
  <button onClick={onHamburgerClick} className={styles.button}><span className={styles.wrapper}><HamburgerIcon /></span></button>
);

HamburgerButton.propTypes = {
  onHamburgerClick: PropTypes.func.isRequired
};

export default HamburgerButton;
