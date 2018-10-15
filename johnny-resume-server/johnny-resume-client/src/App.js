import React, { Component } from 'react';

import './App.css';

import Home from './containers/home';
import About from './containers/aboutMe';
import Resume from './containers/resume';
import Project from './containers/project';
import Contact from './containers/contact';
import Testimonial from './containers/testimonial';
import Footer from './containers/footer';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  // Route,
  // Redirect
} from 'react-router-dom';

import ScrollableAnchor from 'react-scrollable-anchor';

// import navigationLists from './navigationList/navigationList';

class App extends Component {
  constructor () {
    super();
    this.state = {
      message: '',
      maxLimitMessageLength: 1000,
      showErrorMessage: false
    }
    this.baseStateMessageLimit = this.state.maxLimitMessageLength;
  }

  onMaxLimitMessageInContact = (e) => {
    const currentMessage = e.target.value;
    const currentMessageLength = e.target.value.length;

    this.setState((prevState) => {
      if (currentMessageLength > this.state.maxLimitMessageLength) {
        prevState.showErrorMessage = true
      } else {
        prevState.showErrorMessage = false
      }

      return ({
        // message: prevState.message = currentMessage
        message: currentMessage,
        maxLimitMessageLength: this.baseStateMessageLimit - currentMessageLength,
        showErrorMessage: prevState.showErrorMessage
      });
    });
  }

  render() {
    // Hopefully this can be used someday
    // const navList = navigationLists.map((navigationList) => {
    //   return (
    //       <li key={navigationList.id}>
    //         <NavItem eventKey={1} href={`#${navigationList.title}`}></NavItem>
    //         <a href={`#${navigationList.title}`}>{navigationList.title}</a>          
    //       </li>
    //   );
    // })

    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <div className="navigationLists">
              {/* {navList} */}
              <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavItem eventKey={1} href="#HOME">
                      HOME
                    </NavItem>
                    <NavItem eventKey={2} href="#ABOUT">
                      ABOUT
                    </NavItem>
                    <NavItem eventKey={3} href="#RESUME">
                      RESUME
                    </NavItem>
                    <NavItem eventKey={4} href="#PROJECTS">
                      PROJECTS
                    </NavItem>
                    <NavItem eventKey={5} href="#TESTIMONIALS">
                      TESTIMONIALS
                    </NavItem>
                    <NavItem eventKey={6} href="#CONTACT">
                      CONTACT
                    </NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>


          <ScrollableAnchor id={'HOME'}>
              <Home />
          </ScrollableAnchor>
          <ScrollableAnchor id={'ABOUT'}>
              <About />
          </ScrollableAnchor>
          <ScrollableAnchor id={'RESUME'}>
              <Resume />
          </ScrollableAnchor>
          <ScrollableAnchor id={'PROJECTS'}>
              <Project />
          </ScrollableAnchor>
          <ScrollableAnchor id={'TESTIMONIALS'}>
              <Testimonial />
          </ScrollableAnchor>
          <ScrollableAnchor id={'CONTACT'}>
              <Contact 
                message={this.state.message}
                showErrorMessage={this.state.showErrorMessage}
                maxLimitMessageLength={this.state.maxLimitMessageLength}
                onMaxLimitMessageInContact={this.onMaxLimitMessageInContact}
              />
          </ScrollableAnchor>

          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/containers/contact" component={Contact} /> */}
          {/* <Redirect to="/" /> */}

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
