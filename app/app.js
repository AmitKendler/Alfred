import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PickOptionContainer, TripSelectorContainer } from './containers';
import {Scene, Router} from 'react-native-router-flux';

const app = () => (
  <Router>
    <Scene key="root">
      <Scene key="pickOptions" component={PickOptionContainer} initial={true} hideNavBar={true} />
      <Scene key="tripSelector" component={TripSelectorContainer} hideNavBar={true} />
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
