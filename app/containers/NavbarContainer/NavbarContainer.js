import React from 'react';
import {View} from 'react-native';
import {Header, Title, Body, Button, Icon, Left} from 'native-base';
import {Actions} from 'react-native-router-flux';

const NavbarContainer = ({title, hasBack, children}) => (
  <View style={{flex: 1}}>
    <Header>
      <Left>
        {hasBack &&
          <Button onPress={() => Actions.pop()}>
            <Icon name='arrow-back' />
          </Button>
        }
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
    {children}
  </View>
)

export default NavbarContainer;
