import React, { Component } from 'react';
import {Text, ScrollView, Animated} from 'react-native';
import { sortDirections } from './../../utils';
import { RouteOptionsList } from './../../components';
import NavbarContainer from './../NavbarContainer/NavbarContainer';


class RoutesOptionsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          arrShowRoutes: [false, false, false],
          arrAnimVals: [new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)]
        }
    }

    onRoutePressed(row, index){
      console.log("ROUTEPRESS", index);
      // alert("ROW_CLICKEF")
      let newArrAnims = this.state.arrAnimVals;

      let toVal = (this.state.arrShowRoutes[index]) ? 0 : 1;
      var newArrShowRoutes = this.state.arrShowRoutes;
      newArrShowRoutes[index] = !this.state.arrShowRoutes[index];

      Animated.timing(this.state.arrAnimVals[index], {
        toValue: toVal,
        duration: 1000
      }).start(() => {
        newArrAnims[index] = new Animated.Value(0);
        this.setState({arrAnimVals: newArrAnims})
      })

      this.setState({arrShowRoutes: newArrShowRoutes})
    }

    render() {
        // alert(JSON.stringify(this.props.result));
        const routes = this.props.result; // fetch from server []
        // const cop = Object.assign({}, routes);

        const {flights, hotels} = routes;
        let sortedRoutes = [];
        // Map the answers to get the best 3 routes:
        // the indexes (0,1,2) are the 3 routes options
        for (var i = 0; i < 3; i++) {
          var sortedDirections = sortDirections(flights[i], hotels.results[i], null)
          var routeObj = Object.assign(
            {},
            {directions: sortedDirections},
            {showDirection: this.state.arrShowRoutes[i], animVal: this.state.arrAnimVals[i]})
          sortedRoutes.push(routeObj);
        }

        return (
            <NavbarContainer hasBack styleContainer={{flex: 1}} title={'Pick a trip'}>
              <ScrollView>
              {/* <Text>{JSON.stringify(this.state.arrShowRoutes)}</Text> */}

              {(sortedRoutes.length) &&
                <RouteOptionsList
                  onRouteClicked={(route, index) => this.onRoutePressed(route, index)}
                  routes={sortedRoutes} />}
              </ScrollView>

            </NavbarContainer>

        )
    }
}

export default RoutesOptionsContainer;
