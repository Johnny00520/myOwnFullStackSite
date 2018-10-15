import React, { Component } from 'react';
import JacobSite from '../images/jacob-site.png';
import mindscribe from '../images/Mindscribe-input-phone.png';

// import "../../node_modules/video-react/dist/video-react.css"; // import css
// import { Player } from 'video-react';
// https://www.youtube.com/watch?v=lQ5KsAevcFI&feature=youtu.be

// import { DefaultPlayer as Video } from 'react-html5video';
// import 'react-html5video/dist/styles.css';

class Project extends Component {
    render() {
        return (
            <div className="project-page">
                <div className="project-row">
                    <div className="project-row-container">
                        <h1>LOOK AT SOME OF MY PROJECTS</h1>
                            <div className="project-wrapper">
                                <div className="project-item">
                                    <div className="item-wrap">
                                        <a 
                                            href="https://youtu.be/lQ5KsAevcFI" 
                                            target="_blank"
                                            rel='noopener noreferrer'
                                            // style={{ cursor: 'not-allowed', pointerEvents: 'none', opacity: '0.5' }}
                                        >
                                            {/* <img src={JacobSite} alt="Tutoring Service"/> */}
                                            <img src={mindscribe} alt="MindScribe" className="mindscribe"/>
                                        </a>
                                        {/* <Player
                                            playsInline
                                            poster="./images/Mindscribe-input-phone.png"
                                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                        />
                                        <Video autoPlay loop muted
                                            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                            poster="https://drive.google.com/file/d/1oJy_gLvjfBM9dF9Sd7tpMWCwtaGyxKJS/view?usp=sharing"
                                            onCanPlayThrough={() => {
                                                // Do stuff
                                            }}
                                            >
                                            <source src="https://youtu.be/lQ5KsAevcFI" type="video/mp4" />
                                            <track label="English" kind="subtitles" srcLang="en" src="https://youtu.be/lQ5KsAevcFI" default />
                                        </Video> */}
                                    </div>
                                </div>
                                <div className="project-item">
                                    <div className="item-wrap">
                                        <a 
                                            href="http://www.jteducationservices.com/"
                                            target="_blank"
                                            rel='noopener noreferrer'
                                        >
                                            <img src={JacobSite} alt="Tutoring Service" className="tutoring-site"/>
                                        </a>
                                    </div>
                                </div>
                                </div>
                            <div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project