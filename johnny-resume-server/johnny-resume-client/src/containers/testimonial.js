import React, { Component } from 'react';
import image from '../images/jacob-pic.jpg'

class Testimonial extends Component {
    render() {
        return (
            <div className="testimonial-page">
                <div className="testimonial-container">
                    <h1 className="testimonial-title">
                        TESTIMONIALS
                    </h1>
                    <div className="testimonial-row">
                        
                        <div className="testimonial-column-container">
                            <img src={image} alt="My client"/>
                            <b><p className="warning-msg">Warning: Please do NOT contact my client without permission, )</p></b>
                            <div className="text-testimonial-container">
                                <div className="text-testimonial">
                                    <p className="description-author">I needed an impressive website to expand my advertising and customer base for my tutoring company. I had initially decided to create a website myself using a website template platform. However, I didn't have enough time to design everything myself, and the prices were surprisingly high. Johnny took care of creating website for me after an initial consultation, and then I got to tell him what I liked and didn't like about the prototype in a short conversation. Johnny fixed everything to my exact specifications and the website looks great. I have all the functions I need, and he was able to get my website up and running in a short period of time. The price was quite affordable compared to other offers I got and even compared to the monthly/yearly costs of using a website template platform. I'm very satisfied with the overall experience, and would recommend Johnny to anyone.</p>
                                    <cite className="text-author">
                                        - Jacob Withrow - (jacobteacher1@gmail.com)
                                    </cite>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial