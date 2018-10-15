// Array of object

import React from 'react';
import './socialMedia-list.css'

const socialMediaResourceItems = 
    [
        {
            id: 1,
            title: 'Facebook',
            image: 'FB-icon.png',
            alt: 'Facebook',
            url: 'https://www.facebook.com/zheng.q.qiang.7'
        },
        {
            id: 2,
            title: 'Linkedin',
            image: "Linkedin.png",
            alt: 'Linkedin',
            url: 'https://www.linkedin.com/in/chenhao-cheng/'
        },
        {
            id: 3,
            title: 'Github',
            image: 'Github.png',
            alt: 'Github',
            url: 'https://github.com/Johnny00520'
        },
        {
            id: 4,
            title: 'Skype',
            image: 'Skype.png',
            alt: 'Skype',
            url: '#'
        },
        {
            id: 5,
            title: 'Instragram',
            image: 'Instragram.png',
            alt: 'Instragram',
            url: 'https://www.instagram.com/chan88520/?hl=en'
        }
    ]

const SocialMediaResources = () => {
    const socialMediaList = socialMediaResourceItems.map((socialMediaResourceItem) => {
        return (
                <li key={socialMediaResourceItem.id}>
                    <a href={socialMediaResourceItem.url} >
                        <img 
                            src={require(`../images/${socialMediaResourceItem.image}`)} 
                            alt={socialMediaResourceItem.alt}
                            className="socialMediaList"
                        />
                    </a>
                </li>
            )
        })

    return (
        <div className="link-groups">
            {socialMediaList}
        </div>
    )
};


export default SocialMediaResources
