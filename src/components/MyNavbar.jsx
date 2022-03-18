import React from 'react';
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, NavbarBrand, NavbarText, DropdownMenu, DropdownItem, Button, ButtonGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/actions/user'

class MyNavbar extends React.Component {

    render() {
        return (
            <div>
                <Navbar className="box">
                    <NavbarBrand>Test-Permata</NavbarBrand>
                    <Nav>
                        {
                            this.props.userGlobal.username ?
                                <>
                                    <NavItem>
                                        <NavLink>
                                            <Link to="/home">Home</Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink >
                                            About Us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>Hello, {this.props.userGlobal.username}</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown >
                                        <DropdownToggle nav caret>
                                            Pages
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <Link >Profile</Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link>History</Link>
                                            </DropdownItem>
                                            {
                                                this.props.userGlobal.role === "admin" ?
                                                    <DropdownItem>
                                                        <Link to="/admin">Admin</Link>
                                                    </DropdownItem>
                                                    : null
                                            }
                                            <DropdownItem divider />
                                            <DropdownItem onClick={this.props.logoutUser}>
                                                Logout
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </>
                                :
                                <>
                                    <NavItem>
                                        <NavLink href="/home">
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            About Us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink >
                                            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
                                        </NavLink>
                                    </NavItem>
                                </>
                        }
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userGlobal: state.user
    }
}

const mapDispatchToProps = {
    logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);