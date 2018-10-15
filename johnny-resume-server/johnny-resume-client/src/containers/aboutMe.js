import React from 'react';
import { Button } from 'reactstrap';
import downloadIcon from '../images/downloadGif.gif';
import Johnny from '../images/profilePic.JPG';

class About extends React.Component {
    render() {
        return (
            <div className="about-me-page">
                <div className="about-me-page-row">
                    <div className="row-column-left">
                        <img src={Johnny} alt="It's me" style={{ width: '100%', borderRadius: '50%' }}/>
                    </div>
                    <div className="row-main-col">
                        <h1>About me</h1>
                        <p>
                            I am a Front-end software developer intern using React, Redux, ES6, and HTML/CSS. 
                            I am currently working on a project at Pearson using ReactJS and Redux, in which I have experience as well. 
                            As a team member, I am always trying to learn something new everyday and following coding standards, release processes. 
                            On the other side, I am two semesters away from getting done for my Bachelors of Science in Computer Science and Math degree at University of Colorado Boulder. 
                            I really enjoy learning Computer Science and have a faith that I can make this world a little different because of my code someday.
                        </p>
                        <div className="contact-detail">
                            <div className="column-contact-detail">
                                <h2>Information Details</h2>
                                <br/>
                                <div className="myAddress-container">
                                    <span className="myAddress">
                                             Johnny (Chen Hao) Cheng
                                        <br/>3000 Colorado Ave B105
                                        <br/>Boulder, Colorado, 80303
                                        <br/>chch6597@colorado.edu
                                    </span>
                                </div>
                            </div>

                        <div className="download-btn">
                            <Button style={{ margin: '0 auto', backgroundColor: 'black' }}>
                                <a href="https://drive.google.com/file/d/1-VAY0RilFZ0tDvmCp02aLmrW0fdbZtQk/view?usp=sharing">
                                    <span><img src={downloadIcon} alt="This is me" style={{ height: '50px'}}/></span>
                                Download My Resume</a>
                            </Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About