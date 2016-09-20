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

    this.onLinkClick = this.onLinkClick.bind(this);
    this.onHamburgerClick = this.onHamburgerClick.bind(this);
  }

  onLinkClick(e, label) {
    e.preventDefault();
    this.setState(Object.assign(this.state, { selectedCategory: label }));
  }

  onHamburgerClick() {
    this.setState(Object.assign(this.state, { menuExpanded: !this.state.menuExpanded }));
  }

  render() {
    return (
      <SideMenu onLinkClick={this.onLinkClick} onHamburgerClick={this.onHamburgerClick} selectedCategory={this.state.selectedCategory} menuExpanded={this.state.menuExpanded} />
    );
  }
}

export default SideMenuContainer;
