import React from 'react';
import {View, Text, Animated, ScrollView} from 'react-native';
import NavbarContainer from './../NavbarContainer/NavbarContainer';
import {RouteOptionsList} from './../../components';
import {sortDirectionOfMine} from './../../utils';


class MyTripsContainer extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      trips: [],
      arrShowRoutes: [],
      arrAnimVals: []
    }
  }

  componentDidMount(){
    // fetch(`http://10.10.192.64:8000/api/getTripsByUser?username=joe`)
    fetch(`http://10.10.192.64:8000/api/getAllTrips`)
    .then(res => res.json())
    .then(trips => {
      this.setState({trips})
      var arrShowRoutes = [],
          arrAnimVals = [];
      trips.forEach(() => {
        arrShowRoutes.push(false);
        arrAnimVals.push(new Animated.Value(0))
      })

      this.setState({arrAnimVals, arrShowRoutes})
    })
  }

  onRoutePressed(row, index){
    // alert("ROW_CLICKEF")
    let newArrAnims = this.state.arrAnimVals;

    var newArrShowRoutes = this.state.arrShowRoutes;
    // if (!newArrShowRoutes[index]){
    //   newArrShowRoutes[index] = true;
    // }
    // else{
      newArrShowRoutes[index] = !this.state.arrShowRoutes[index];
    // }

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
    trips && trips.forEach((trip, i) => sortedRoutes.push({
      directions: sortDirectionOfMine(trip),
      showDirection: this.state.arrShowRoutes[i],
      animVal: this.state.arrAnimVals[i],
      color: '#FFC107',
      icon: 'md-information-circle'
    }));
    // alert(Object.keys())
    // sortedRoutes.push(sortDirectionOfMine(trips));
    return (
      <NavbarContainer hasBack styleContainer={{flex: 1}} title={'My trips'}>
        <ScrollView>
          <RouteOptionsList
            onRouteClicked={(route, index) => this.onRoutePressed(route, index)}
            routes={sortedRoutes} />

        </ScrollView>
      </NavbarContainer>
    )
  }
}

export default MyTripsContainer;
