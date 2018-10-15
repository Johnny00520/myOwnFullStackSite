import React from 'react';
import './containers.css'
import SocialMediaResourceLists from '../socialMedia/socialMedia-list';

class Home extends React.Component {
    render () {
        return (
            <div className="homepage" style={{ maxHeight: '638px'}}>
                <div className="homebody-container">
                    <h1 className="homepage-headline">I'm Johnny Cheng</h1>
                    <h3 className="homepage-description">
                        I'm a Software Engineering based student at University of Colorado Boulder. I am two semesters away from completing my Bachelors of Science at the University.
                        I enjoy learning Computer Science and believe that I will make this world a little different because of my program someday.
                    </h3>
                    <SocialMediaResourceLists />
                </div>
            </div>
        );
    }
}

export default Home