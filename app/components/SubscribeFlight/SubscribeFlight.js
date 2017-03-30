import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Form, Button, Item, Input, Content, Container } from 'native-base';

const SubscribeFlight = ({ style, onSubscribe }) => {
    let flightInput;

    return (
      <View style={style}>
        <Text style={{textAlign: 'center',fontSize: 16, margin: 5}}>Already have a flight?</Text>
        <Form style={{margin: 20}}>
          <Item>
            <Input
              keyboardType={'numeric'}
              onChangeText={(t) => flightInput = t}
              style={{textAlign: 'center'}}
              placeholder="Flight NO." />
          </Item>
        </Form>
        <Button onPress={() => onSubscribe(flightInput)} info full style={{margin: 10}}>
          <Text style={{color: 'white'}}>Subscribe</Text>
        </Button>
      </View>
    )
}

export default SubscribeFlight
