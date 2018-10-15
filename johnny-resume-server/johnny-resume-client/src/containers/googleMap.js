import React, { Component } from 'react';

// Map component adds a div with an id assigned from the parent container. 
// When the component mounted, we insert a script node to the parent element (or we can add it to the head). 
// This cannot be synchronous. So, if you try to access the API you will get an error. 
// We need to add an event listener for 'load'. At this point, we know that we can access the API. 
// But we don't want to load the same library again if the API is already included. So, simply wrap it with an if (!window.google) phrase.

// After accessing the API, we can now create a map. 
// Call the API to create a map with the options. 
// Options are sent as props from the parent. 
// After creating the map, the parent will need to get the reference to the map. 
// That's why we've added onMapLoad prop. 
// This is a func prop that will be called when the map is created and will receive the map as a parameter. 
// Using this parameter we can now create Markers, InfoWindow, Polygons and whatever the Maps API has. 
// In the example, it creates a simple marker on the map.

export default class Map extends Component {
   
    onScriptLoad = () => {
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
            this.props.onMapLoad(map)
    }

    //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
    //Initialization that requires DOM nodes should go here. 
    //If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    componentDidMount() {
        if (!window.google) {
            // not working in React.createElement
            // const s = React.createElement('script', { type: 'text/javascript', src: `https://maps.google.com/maps/api/js?key=AIzaSyAO62N5zwaI4ck-RZavR5zaJKZdOfFiSzM`} )

            let s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.google.com/maps/api/js?key=AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w`;
            let x = document.getElementsByTagName('script')[0];

            x.parentNode.insertBefore(s, x);
            // Below is important. 
            //We cannot access google.maps until it's finished loading
            s.addEventListener('load', e => {
                this.onScriptLoad()
            })
        } else {
            this.onScriptLoad()
        }
    }

    render() {
        return (
            <div className="google-map"
                id={this.props.id} />
        )
    }
}