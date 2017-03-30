import React, { Component } from 'react';
import { AddressPicker } from './../../components';

class AddressPickerContainer extends Component {

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
            <NavbarContainer title={'Address Picker'} hasBack style={{flex: 1}}>
            <AddressPicker/>
        </NavbarContainer>
        )
    }
}

export default AddressPickerContainer;
