import React from 'react';
import CCNA_image from '../images/cisco_ccna_R_26S.png';
import Map from './googleMap';
import InfoWindow from './googleMapInfoWindow'
import ReactDOM from 'react-dom';

class Resume extends React.Component {

    createInfoWindow = (e, map) => {
        const infoWindow = new window.google.maps.InfoWindow({
            content: '<div id="infoWindow" />',
            position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
        })
        infoWindow.addListener('domready', e => {
            ReactDOM.render(<InfoWindow />, document.getElementById('infoWindow'))
        })
        infoWindow.open(map)
    }

    render() {
        return (
            <div className="resume-page">
                <div className="education-row">
                    <div className="education-portion-container">
                        <div className="education-column-header">
                            <h1><u><span>Education</span></u></h1>
                        </div>
                        <div className="education-column-description">
                            <div className="education-row-items">
                                <div className="work-items-eachrow">
                                    <h3 className="title">University of Colorado Boulder</h3>
                                    <p className="subtitle"><i>Bachelor of Science in Computer Science, Software Engineering, Minor: Applied Mathematics</i>
                                        <span>。</span>
                                        <em>Expected May 2019</em>
                                        <span>。</span>
                                        <em>Dean's List May 2016</em>
                                        <span>。</span>
                                        <em>GPA: 3.5</em>
                                    </p>
                                    <p className="description">
                                        Being a student at CU Boulder, I learned an immense amount in school and the importance of an education is irrefutable.
                                        There are certain life and problem-solving skills that I feel I didn’t learn enough about in school.
                                        What I’ve come to learn is there’s specific angles towards that should be looked at and studied more closely in an effort to give students a real edge before being handed a diploma and heading down life’s path.
                                        I also enjoy doing things as a team member, helping each other to reach the goal. For me, happy learning is really impotant,
                                        and doing everything my best without any regrets is one of my mottos.
                                    </p>
                                </div>
                                <div className="work-items-eachrow">
                                    <h3 className="title">Front Range Community College</h3>
                                    <p className="subtitle"><i>Associated Science in Computer Science</i>
                                        <span>。</span>
                                        <em>Dec 2015</em>
                                        <span>。</span>
                                        <em>Dean's List May / 2014 - Dec / 2015</em>
                                        <span>。</span>
                                        <em>GPA: 3.92</em>
                                    </p>
                                    <p className="description">
                                        Front Range Community College was to prepare me to go to CU Boulder. I learned how to manage the time,
                                        as well how to do lab as a team member. I did not take many Computer Science classes but I explored more
                                        subjects and opened my eyes to feel how interesting this world is. Being a science student does not mean
                                        that you only focus on science. We all should get touched with any subjects to improve our values.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="work-row">
                    <div className="work-portion-container">
                        <div className="work-column-header">
                            <h1><u><span>Work</span></u></h1>
                        </div>
                        <div className="work-column-description">
                            <div className="work-row-items">
                                <div className="work-items-eachrow">
                                    <h3 className="title">Pearson</h3>
                                    <p className="subtitle"><i>Software Developer Intern</i>
                                        <span>。</span>
                                        <em>June 2018 - present</em>
                                    </p>
                                    <p className="description">
                                        · Developed, maintained and debugged single-page application using React.js<br/>
                                        · Creating mockups using basic HTML5, SCSS, and Bootstrap based off of designs<br/>
                                        · Agile software development practices (mainly scrum)<br/>
                                        · Linux/Unix command line<br/>
                                        · JIRA project management software<br/>
                                        · GIT versioning<br/>
                                    </p>
                                </div>
                                <Map
                                    id="myMap"
                                    options={{
                                        center: { lat: 39.5910, lng: -104.9636 },
                                        zoom: 14
                                    }}
                                    onClick={this.createInfoWindow}
                                    onMapLoad={map => {

                                        const marker = new window.google.maps.Marker({
                                            position: { lat: 39.5910, lng: -104.9636 },
                                            map: map,
                                            title: 'Pearson eCollege'
                                        });
                                        marker.addListener('click', e => {
                                            this.createInfoWindow(e, map)
                                        })
                                    }}
                                />
                                <div className="work-items-eachrow">
                                    <h3 className="title">Fall Stack Developer</h3>
                                    <p className="subtitle"><i>Self-employee</i>
                                        <span>。</span>
                                        <em>June 2018 - Present</em>
                                        <br/>
                                        <span>
                                            <a 
                                                target="_blank" 
                                                rel='noopener noreferrer'
                                                href="https://sheltered-plateau-28195.herokuapp.com/"
                                                > 
                                                Link to see the project
                                            </a>
                                        </span>
                                    </p>
                                    <p className="description">
                                        · Utilizing personal tutoring services web pages with React.js<br/>
                                        · Design web pages with React-router-dom<br/>
                                        · Processing email functionality in the back-end with Node.js<br/>
                                        · Programming layout with Redux<br/>
                                        · Creating mockups using basic HTML5, CSS, and Bootstrap based off of designs<br/>
                                    </p>
                                </div>
                                <div className="work-items-eachrow">
                                    <h3 className="title">University of Colorado Boulder</h3>
                                    <p className="subtitle"><i>Research Assistance</i>
                                        <span>。</span>
                                        <em>June 2017 - June 2018</em>
                                    </p>
                                    <p className="description">
                                        · Designed a web app using HTML5/CSS to display UI<br/>
                                        · Solved to play sequence audio clips for the web app with one user interaction using JavaScript<br/>
                                        · Assembled and tested multilingual languages in the algorithm with JavaScript<br/>
                                        · Programmed a mobile app with React native including API to perform functionalities<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="certification-row">
                    <div className="certification-portion-container">
                        <div className="certification-column-header">
                            <h1><u><span>Certification</span></u></h1>
                            <a href="https://www.youracclaim.com/badges/15d7e132-6970-4fc9-bf12-b9531bf730d4/linked_in">
                                <img src={CCNA_image} alt=""/>
                            </a>
                        </div>
                        <div className="certification-column-description">
                            <div className="certification-row-items">
                                <div>
                                    <h3 className="title">Cisco Certified Network Associate Routing and Switching</h3>
                                    <p className="subtitle"><i>CCNA Routing and Switching</i>
                                        <span>。</span>
                                        <em>June 2018 - present</em>
                                    </p>
                                    <p className="description">
                                    This certification validates the skills required of associate-level network professionals to understand network fundamentals, LAN switching technologies, IPv4 and IPv6 routing technologies, WAN technologies, infrastructure services, security, and management.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                




            </div>
        );
    }
}

export default Resume