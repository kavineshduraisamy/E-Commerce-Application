import React, { Component } from "react";
import {Navbar,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import './nav.css';
import SearchBar from './SearchBar';
import Icon from "../Icon/Icon";
import redbucketicon from './Img/redbucketicon.png'
import Men from '../NavList/MenList';
import LogLogout from "../NavList/LogLogout";
import ToggleDisplay from "react-toggle-display";
// import Logo from "../android-chrome-192x192.png";
class Header extends Component {
  constructor() {
    super();
    this.state = { men: false ,show2:false};
  }
  handleClick() {
    this.setState({
      men: !this.state.men
    });
  }
    handleClick1() {
    this.setState({
      men: !this.state.men
    });
  }
  handleClick2() {
    this.setState({
      show2: !this.state.show2
    });
  }
  render() {
    return (
      
      <React.Fragment>
        <div className="marquee-container">
      <div className="marquee">
      <h6 >Get flat 30% off on your first purchase. - Use code REDBUCKET    *T&Cs apply.</h6>
      </div>
      </div>
        <Navbar className="navbar" light expand="md">
          <NavbarBrand href="/">
            <img className="brandlogo" src={redbucketicon} width={500} height={500} alt="" />
            {/* <img className="brandlogo" src="https://i.pinimg.com/originals/66/f7/72/66f77296282b5ab7c2780724802614c0.png" alt="" /> */}

          </NavbarBrand>
          <Nav id = 'navi' className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-bar" onClick={() => this.handleClick()}>
                MEN
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar" onClick={() => this.handleClick()} >WOMEN</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar" onClick={() => this.handleClick()}>KIDS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar" onClick={() => this.handleClick()}>HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar" onClick={() => this.handleClick()}>FURNITURE</NavLink>
            </NavItem>
            <NavItem>
              <SearchBar />
            </NavItem>
            <NavItem className="sideIcon">
              <Icon
                className="fa fa-user fa-2x"
                onMouseOver={() => this.handleClick2()}
              />
            </NavItem>
            <NavItem className="sideIcon">
              <a href='/whislist'>
              <Icon className="fa fa-bookmark fa-2x" />
              </a>
            </NavItem>
            <NavItem className="sideIcon">
              <a href='/cart'>
              <Icon className="fa fa-shopping-bag fa-2x" />
              </a>
            </NavItem>
          </Nav>
        </Navbar>
        <ToggleDisplay show={this.state.men}>
          <Men />
        </ToggleDisplay>
        <ToggleDisplay show={this.state.show2}>
          <LogLogout />
        </ToggleDisplay>
      </React.Fragment>
    );
  }
}

export default Header;
