import React from 'react';
import { View, Text } from 'react-native';
import { Content, Form, Item, Input, CheckBox, ListItem } from 'native-base';
import DatePicker from 'react-native-datepicker'

const SelectTrip = ({ changeDate }) => {
    let date = new Date();
    return (
        <View>
          <Form>
            <Item>
                <Input placeholder="Write an address" />
            </Item>
            <Item>
                <DatePicker
		        style={{width: 200}}
		        date={date}
		        mode="datetime"
		        placeholder="select date"
		        format="DD-MM-YYYY hh:mm"
		        minDate="2016-05-01"
		        maxDate="2016-06-01"
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
		        onDateChange={(newDate) => {date=newDate}}
		      />
            </Item>
             <ListItem>
              <CheckBox checked={false} />
              <Text>Flight</Text>
            </ListItem>
              <ListItem>
              <CheckBox checked={false} />
              <Text>Hotel</Text>
            </ListItem>
              <ListItem>
              <CheckBox checked={false} />
              <Text>Transportation</Text>
            </ListItem>
        </Form>
    </View>
    )
}

export default SelectTrip
