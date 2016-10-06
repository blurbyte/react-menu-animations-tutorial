import React, {PropTypes} from 'react';

//components
import HamburgerButton from './HamburgerButton';
import CategoryLink from './CategoryLink';

//icons
import {CodeIcon, DesignIcon, IdeasIcon, ResearchIcon, ChartsIcon, DocsIcon} from '../common/Icons';

const styles = require('./SideMenu.css');

const SideMenu = ({onLinkClick, onHamburgerClick, selectedCategory, menuExpanded}) => (
  <div className={menuExpanded ? styles['wrapper-expanded'] : styles.wrapper}>
    <HamburgerButton onHamburgerClick={onHamburgerClick} />
    <nav>
      <ul className={styles['nav-links']}>
        <li><CategoryLink onLinkClick={onLinkClick} selectedCategory={selectedCategory} label="Code"><CodeIcon /></CategoryLink></li>
        <li><CategoryLink onLinkClick={onLinkClick} selectedCategory={selectedCategory} label="Design"><DesignIcon /></CategoryLink></li>
        <li><CategoryLink onLinkClick={onLinkClick} selectedCategory={selectedCategory} label="Ideas"><IdeasIcon /></CategoryLink></li>
        <li><CategoryLink onLinkClick={onLinkClick} selectedCategory={selectedCategory} label="Research"><ResearchIcon /></CategoryLink></li>
        <li><CategoryLink onLinkClick={onLinkClick} selectedCategory={selectedCategory} label="Charts"><ChartsIcon /></CategoryLink></li>
        <li><CategoryLink onLinkClick={onLinkClick} selectedCategory={selectedCategory} label="Docs"><DocsIcon /></CategoryLink></li>
      </ul>
    </nav>
  </div>
);

SideMenu.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  onHamburgerClick: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  menuExpanded: PropTypes.bool.isRequired
};

export default SideMenu;
