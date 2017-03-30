import React from 'react';
import {sortDirections} from './../../utils';
import {RouteOptionsList} from './../../components';

class RoutesOptionsContainer extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const routes = [{}]; // fetch from server []
    let sortedRoutes = [];
    routes.forEach(route => sortedRoutes.push(sortDirections(route)));

    return (
      <RouteOptionsList routes={routes} />
    )
  }
}

export default RoutesOptionsContainer;
