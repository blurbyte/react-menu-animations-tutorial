import React, {PropTypes} from 'react';

const styles = require('./CategoryLink.css');

const CategoryLink = ({children, onLinkClick, selectedCategory, label}) => (
  <a className={label === selectedCategory ? styles['link-selected'] : styles['link-active']} href="#" onClick={e => onLinkClick(e, label)}>
    <div className={styles.wrapper}>{children}</div>
    <p className={`${styles.label} label-expanded`}>{label}</p>
  </a>
);

CategoryLink.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default CategoryLink;
