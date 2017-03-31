import React from 'react';
import { ListView } from 'react-native';
import RouteOption from './../RouteOption/RouteOption'
import { RouteOptionsList, DirectionList } from './../../components';


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const RoutesList = ({ routes, onRouteClicked }) => {
  return (
      <ListView
        dataSource={ds.cloneWithRows(routes)}
        renderRow={(row, sectionId, index) => (
          <RouteOption data={row.directions} index={index} onRouteClicked={() => onRouteClicked(row, index)} >
            {row.showDirection && <DirectionList style={{marginHorizontal: 10, marginVertical: 5}} animatedVal={row.animVal} data={row.directions} /> }
          </RouteOption>
        )}
      />
  )
}



export default RoutesList;
