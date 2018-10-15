import React, { Component } from 'react';
import { 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardSubtitle 
} from 'reactstrap';

import PearsonImage from '../images/pearson-eCollege.png';

export default class InfoWindow extends Component {
    // constructor(props) {
    //     super(props);

    //     const { classes } = this.props;
    // }
    render() {
        return (
            <div className="infoWindow-container">
                <Card className="card-outer">
                    <a href="https://www.pearson.com/us/higher-education.html">
                        <CardImg top width="80%" src={PearsonImage} alt="Pearson eCollege" />
                    </a>

                    <CardBody style={{}}>
                        <CardTitle>Pearson</CardTitle>
                        <CardSubtitle className="card-subtitle">Pearson eCollege is an on-demand, or software as a service, provider of eLearning software and services to secondary and post-secondary learning institutions and is owned by Pearson PLC</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        );
    }
}