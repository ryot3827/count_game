import React, {Component} from "react";
import { Navbar, Nav } from 'react-bootstrap';

class TopBar extends Component {
  render () {
    return (
      <Navbar bg="info" expand="lg">
        <Navbar.Brand href="/">CountGame</Navbar.Brand>
      </Navbar>
    );
  }
}

export default TopBar;
