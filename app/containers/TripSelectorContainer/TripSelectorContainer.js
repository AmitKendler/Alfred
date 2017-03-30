import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SelectTrip } from './../../components';
import NavbarContainer from './../NavbarContainer/NavbarContainer';

class PickOptionContainer extends Component {

    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15" }
    }

    changeDate(date) {
        this.setState({ date: date });
    }

    createTrip(tripDetails) {
        alert(Object.keys(tripDetails));
    }

    render() {
      return (
        <NavbarContainer title={'Arrange a flight'} hasBack style={{flex: 1}}>
          <SelectTrip createTrip={this.createTrip}/>
        </NavbarContainer>
      )
    }
}

export default PickOptionContainer;
