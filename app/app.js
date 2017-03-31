import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PickOptionContainer, TripSelectorContainer, AddressPickerContainer, RoutesOptionsContainer, MyTripsContainer } from './containers';
import { Scene, Router, Actions } from 'react-native-router-flux';
import initNotifs from './utils/push-notification';
initNotifs(() => {
  Actions.myTrips();
});

const app = () => (
    <Router>
    <Scene key="root">
      <Scene key="pickOptions" component={PickOptionContainer} initial={true} hideNavBar={true} />
      <Scene key="tripSelector" component={TripSelectorContainer} hideNavBar={true} />
      <Scene key="addressPicker" component={AddressPickerContainer} hideNavBar={true} />
      <Scene key="routesOptions" component={RoutesOptionsContainer} hideNavBar={true} />
      <Scene key="myTrips" component={MyTripsContainer} hideNavBar={true} />
    </Scene>
  </Router>
    // <View style={{flex: 1}}>
    //   <PickOptionContainer/>
    // {/* </View> */}
    //   {/* <View style={{flex: 1}}>
    //   <TripSelectorContainer/> */}
    // </View>
)

export default app;
