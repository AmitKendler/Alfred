import React from 'react';
import {View} from 'react-native';
import {Header, Title, Body, Button, Icon, Left} from 'native-base';
import {Actions} from 'react-native-router-flux';

const NavbarContainer = ({title, hasBack, children}) => (
  <View style={{flex: 1}}>
    <Header>
      {hasBack &&
        <Left>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon style={{color: 'white'}} name='arrow-back'  />
          </Button>
        </Left>
      }
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
    {children}
  </View>
)

export default NavbarContainer;
