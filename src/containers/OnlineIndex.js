'use strict';

import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
  flex: 1;
  background: green;
  margin: 15px;
  justify-content: center;
`;
const WelcomeLabel = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 30px;
`;

export default class OfflineIndex extends PureComponent {
    static navigationOptions = {
        title: '线上',
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'star'} color={tintColor} size={24}/>
        )
    };

    render() {
        return (
            <Container>
                <WelcomeLabel>联网操作演示</WelcomeLabel>
            </Container>
        );
    }
}
