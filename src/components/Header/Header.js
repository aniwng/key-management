import {Link} from 'react-router-dom';
import ReactBootstrap from 'react-bootstrap';

var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;

import '../../styles/Header.css';

const Header = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to='/'>Registration Key Management</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <li>
                    <Link to='/create'>Create</Link>
                </li>
            </Nav>
            <Nav pullRight>
                <NavItem href="#">Help</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;