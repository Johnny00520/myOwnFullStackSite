import React from 'react';
import './containers.css'
import SocialMediaResourceLists from '../socialMedia/socialMedia-list';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Contact from './contact';

// import { NavHashLink as NavLink } from 'react-router-hash-link';
import { NavHashLink as Link } from 'react-router-hash-link';

class Home extends React.Component {

    render () {
        return (

            <div className="homepage-header">

                <Navbar>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>

                    <Nav>
                        <li>
                        <Link
                            to="/containers/home"
                            // activeClassName="selected"
                        >

                            HOME

                        </Link>


                        <Link
                            smooth
                            to="/containers/contact#contact"
                            // activeClassName="selected"
                        >
                        Contact

                        </Link>
                        </li>
                    </Nav>

                    </Navbar.Collapse>
                    
                </Navbar>


                <div className="homebody-container">
                    <h1 className="homepage-headline">I'm Johnny Cheng</h1>
                    <h3 className="homepage-description">I'm software engineering student at University of Colorado Boulder</h3>
                    <SocialMediaResourceLists />
                </div>
                
                <div id="contact">
                    <Contact />
                </div>

            </div>

        );
    }
}

export default Home