import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SelectTrip } from './../../components';
import NavbarContainer from './../NavbarContainer/NavbarContainer';
import { Actions } from 'react-native-router-flux';

class PickOptionContainer extends Component {

    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15" }
    }

    changeDate(date) {
        this.setState({ date: date });
    }

    createTrip(tripDetails) {
        tripDetails.date = tripDetails.date.toISOString().slice(0, 19);
        fetch("http://10.10.192.64:8000/getTrips/", {
            method: "POST",
            "headers": { "Content-Type": "application/json" },
            body: JSON.stringify(tripDetails)
        }).then(res => {
            if (res.status === 200) {
                res.json().then(res => {
                    Actions.routesOptions({ result: res });
                }).catch(err => alert(err));

            } else {
                alert("ERROR: no sleep. what did you expect? status " + res.status);
            }
        });

    }

    render() {
        return (
            <NavbarContainer title={'Create a meeting'} hasBack style={{flex: 1}}>
        <ScrollView>
          <SelectTrip createTrip={this.createTrip}/>
          </ScrollView>
        </NavbarContainer>
        )
    }
}

export default PickOptionContainer;
