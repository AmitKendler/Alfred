import React from 'react';
import { ListView } from 'react-native';
import RouteOption from './../RouteOption/RouteOption'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const RoutesList = ({ routes }) => {
    return (
        <ListView
      dataSource={ds.cloneWithRows(routes)}
      renderRow={(row) => <RouteOption data={row} />
    }
    />
)
}

export default RoutesList;
