import React from 'react';
import {sortDirections, DIRECTIONS, getStartTime, getEndTime} from './../../utils';

const getDir = (direction) => {
  switch (direction.type) {
    case DIRECTIONS.FLIGHT:
      return getNextDir('md-plane')
    case DIRECTIONS.CAR:
      return getNextDir('md-car')
    case DIRECTIONS.HOTEL:
      return getNextDir('md-house')
  }
}
const getNextDir = (iconName) => (
  <View style={{flexDirection: 'row'}}>
    <Text>></Text>
    <Icon name={iconName} />
  </View>
)

const RouteOption = ({data}) => {
  // let sortedRoutes = sortDirections({flights, cars, hotels})
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {data.map(direction => getDir(direction))}
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon name="md-time" />
        <Text>{`{$getStartTime(data[0])} - $getStartTime(data[data.length-1])}`}</Text>
      </View>
    </View>
  )
}

export default RouteOption;
