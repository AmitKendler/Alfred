import React, { Component } from 'react';
import { sortDirections } from './../../utils';
import { RouteOptionsList } from './../../components';
import NavbarContainer from './../NavbarContainer/NavbarContainer';

class RoutesOptionsContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        alert(JSON.stringify(this.props.result));
        const routes = this.props.result; // fetch from server []
        let sortedRoutes = [];
        //routes.flights.forEach(route => sortedRoutes.push(sortDirections(route)));

        return (
            <NavbarContainer styleContainer={{flex: 1}} title={'Pick a trip'}>
              {(sortedRoutes.length)?<RouteOptionsList routes={routes} />:null}
            </NavbarContainer>

        )
    }
}

export default RoutesOptionsContainer;
