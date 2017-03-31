import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator, ToastAndroid } from 'react-native';
import { SelectTrip } from './../../components';
import NavbarContainer from './../NavbarContainer/NavbarContainer';
import { Actions } from 'react-native-router-flux';

class PickOptionContainer extends Component {

    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15", loading: false }
    }

    changeDate(date) {
        this.setState({ date: date });
    }

    createTrip(tripDetails) {
        let tripIsoDate = tripDetails.date.toISOString().slice(0, 19);
        this.setState({loading: true})
        fetch("http://10.10.192.64:8000/getTrips/", {
            method: "POST",
            "headers": { "Content-Type": "application/json" },
            body: JSON.stringify(Object.assign({}, tripDetails, {date: tripIsoDate}))
        }).then(res => {
          this.setState({loading: false})
            if (res.status === 200) {
                res.json().then(res => {
                    Actions.routesOptions({ result: res });
                }).catch(err => {
                  this.setState({loading: false})
                  ToastAndroid.show("Error was occured", ToastAndroid.SHORT);
                });

            } else {
                alert("ERROR: no sleep. what did you expect? status " + res.status);
            }
        })
        .catch(err => {
          ToastAndroid.show("Sorry, but error was occured", ToastAndroid.SHORT);
          this.setState({loading: false})
        });

    }

    render() {
        return (
            <NavbarContainer title={'Create a meeting'} hasBack style={{flex: 1}}>
        <ScrollView>
          {this.state.loading &&
            <ActivityIndicator
              animating={true}
              style={{top: 0, position: 'absolute', right: 0, left: 0, height: 100}}
              size="large"
            />}
          <SelectTrip createTrip={(data) => this.createTrip(data)}/>
          </ScrollView>
        </NavbarContainer>
        )
    }
}

export default PickOptionContainer;
