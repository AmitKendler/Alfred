import React from 'react';
import { sortDirections, DIRECTIONS, getStartTime, getEndTime } from './../../utils';
import { View, Text, TouchableOpacity } from 'react-native';
import {Icon, Card, CardItem, Button} from 'native-base';
import StarRating from 'react-native-star-rating';


const getDir = (direction) => {
    switch (direction.type) {
        case DIRECTIONS.FLIGHT:
            return getNextDir('md-plane', direction)
        case DIRECTIONS.CAR:
            return getNextDir('md-car', direction)
        case DIRECTIONS.HOTEL:
            return getNextDir('md-home', direction)
    }
}
const getNextDir = (iconName, direction) => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Icon name="md-return-right" />
    <Icon name={iconName} style={{color: 'lightblue', fontSize: 36}} />
  </View>
)

const RouteOption = ({ data, index, onRouteClicked, children }) => {
    // let sortedRoutes = sortDirections({flights, cars, hotels})
    return (
      <View>
        <Card>
          <CardItem onPress={() => onRouteClicked()} style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row'}}>
              {data.map(direction => getDir(direction))}
            </View>
            <TouchableOpacity onPress={() => alert("PRESSED")}>
              <Icon name="md-checkmark-circle" />
            </TouchableOpacity>
            {/* <Text style={{fontSize: 18}}>{`${Math.floor(Math.random() * 400)+100}$`}</Text> */}
          </CardItem>
          <CardItem onPress={() => onRouteClicked()} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
             <Icon name="md-time" />
             {/* <Text>{JSON.stringify(data)}</Text> */}
             <Text>{`${getStartTime(data[0])} - ${getEndTime(data[data.length-1])}`}</Text>
            </View>
           <StarRating
             disabled={false}
             emptyStar={'ios-star-outline'}
             fullStar={'ios-star'}
             halfStar={'ios-star-half'}
             iconSet={'Ionicons'}
             maxStars={5}
             starSize={22}
             rating={index == 0 ? 5 : 4}
             disabled={true}
             starColor={'lightblue'}
           />
          </CardItem>
       </Card>
       {children}
     </View>
    )
}

export default RouteOption;
