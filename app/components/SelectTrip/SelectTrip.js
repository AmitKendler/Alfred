import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content, List, Input, CheckBox, ListItem, Icon, Button } from 'native-base';
import DatePicker from 'react-native-datepicker'
import RatePicker from './RatePicker';
import AddressPicker from './AddressPicker';

class SelectTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            starCount: 4,
            flightsCheck: true,
            hotelCheck: true,
            transportationCheck: true,
            address: {
                lat: "",
                lng: ""
            }
        }
    }

    changeAddress(data, details) {
        this.setState({
            address: {
                lat: details.geometry.location.lat,
                lng: details.geometry.location.lng
            }
        });
    }

    changeRate(rate) {
        this.setState({ starCount: rate });
    }


    render() {
        return (
            <View>
          <List >
             <ListItem itemHeader first>
                <Text>Meeting details</Text>
            </ListItem> 
            <ListItem>
                <AddressPicker onAddressChange={this.changeAddress.bind(this)}/>
            </ListItem>
            <ListItem style={{ justifyContent:'center'}}>
                <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="datetime"
            placeholder="select date"
            format="DD-MM-YYYY hh:mm"
            minDate={new Date()}
            maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 10))}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(newDate) => {this.setState({date:newDate})}}
          />

            </ListItem>
            <ListItem itemHeader first>
                <Text>What do you need</Text>
            </ListItem> 
             <ListItem style={{justifyContent:"center"}}>
              <CheckBox checked={this.state.flightsCheck} onPress={()=>this.setState({flightsCheck:!this.state.flightsCheck})}  />
              <Text style={{marginRight:20}}>Flight</Text>
              <CheckBox checked={this.state.hotelCheck} onPress={()=>this.setState({hotelCheck:!this.state.hotelCheck})}/>
              <Text style={{marginRight:20}}>Hotel</Text>
              <CheckBox checked={this.state.transportationCheck} onPress={()=>this.setState({transportationCheck:!this.state.transportationCheck})}/>
              <Text style={{marginRight:20}}>Transportation</Text>
            </ListItem>
            <ListItem itemHeader first >
                <Text>Rating of service</Text>
            </ListItem> 
            <ListItem style={{justifyContent:"center"}}>
            <RatePicker starCount={this.state.starCount} onChangeRate={this.changeRate.bind(this)} />
            </ListItem>
            <ListItem style={{justifyContent:"center"}} >
              <Button onPress={()=>this.props.createTrip(this.state)}>
                  <Text style={{color:"white","fontSize": 30}}>Set my trip!</Text>
              </Button>
            </ListItem> 
        </List>
         
    </View>
        )
    }
}

export default SelectTrip
