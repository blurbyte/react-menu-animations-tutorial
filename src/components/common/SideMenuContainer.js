import React from 'react';

//presentational component
import SideMenu from './SideMenu';

class SideMenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
      menuExpanded: false
    };

    this.selectCategory = this.selectCategory.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  selectCategory(e, label) {
    e.preventDefault();
    this.setState(Object.assign(this.state, { selectedCategory: label }));
  }

  toggleMenu() {
    this.setState(Object.assign(this.state, { menuExpanded: !this.state.menuExpanded }));
  }

  render() {
    return (
      <SideMenu onLinkClick={this.selectCategory} onHamburgerClick={this.toggleMenu} selectedCategory={this.state.selectedCategory} menuExpanded={this.state.menuExpanded} />
    );
  }
}

export default SideMenuContainer;
