import React from 'react';
import {View, Text, Animated} from 'react-native';
import NavbarContainer from './../NavbarContainer/NavbarContainer';
import {RouteOptionsList} from './../../components';
import {sortDirectionOfMine} from './../../utils';


class MyTripsContainer extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      trips: [],
      arrShowRoutes: [],
      arrAnimVals: [new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)]
    }
  }

  componentDidMount(){
    fetch(`http://10.10.192.64:8000/api/getTripsByUser?username=joe`)
    .then(res => res.json())
    .then(trips => {
      this.setState({trips})
    })
  }

  onRoutePressed(row, index){
    // alert("ROW_CLICKEF")
    let newArrAnims = this.state.arrAnimVals;

    var newArrShowRoutes = this.state.arrShowRoutes;
    if (!newArrShowRoutes[index]){
      newArrShowRoutes[index] = true;
    }
    else{
      newArrShowRoutes[index] = !this.state.arrShowRoutes[index];
    }

    let toVal = (newArrShowRoutes[index]) ? 1 : 0;


    Animated.timing(this.state.arrAnimVals[index], {
      toValue: toVal,
      duration: 1000
    }).start(() => {
      newArrAnims[index] = new Animated.Value(0);
      this.setState({arrAnimVals: newArrAnims})
    })

    this.setState({arrShowRoutes: newArrShowRoutes})
  }

  render(){
    const {trips} = this.state;
    let sortedRoutes = [];
    // Map the answers to get the best 3 routes:
    // the indexes (0,1,2) are the 3 routes options
    trips && trips.forEach(trip => sortedRoutes.push(sortDirectionOfMine(trip)));
    // for (var i = 0; i < 3; i++) {
    //   var sortedDirections = sortDirectionOfMine()
    //   var routeObj = Object.assign(
    //     {},
    //     {directions: sortedDirections},
    //     {showDirection: this.state.arrShowRoutes[i], animVal: this.state.arrAnimVals[i]})
    //   sortedRoutes.push(routeObj);

    return (
      <NavbarContainer hasBack styleContainer={{flex: 1}} title={'My trips'}>
        <View>
          <RouteOptionsList
            onRouteClicked={(route, index) => this.onRoutePressed(route, index)}
            routes={sortedRoutes} />
            <Text>{JSON.stringify(this.state.trips)}</Text>

        </View>
      </NavbarContainer>
    )
  }
}

export default MyTripsContainer;
