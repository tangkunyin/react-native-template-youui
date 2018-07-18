'use strict';

import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import lodash from 'lodash';
import { observer, inject } from 'mobx-react';
import BaseScreen from "../BaseScreen";

const Container = styled.View`
  flex: 1;
  margin: 15px;
`;
const Tip = styled.Text`
  color: yellow;
  text-align: center;
  font-size: 18px;
  background: green;
  margin-top: 100px;
  margin-bottom: 30px;
`;
const Label = styled.Text`
  color: green;
  text-align: center;
  font-size: 30px;
  background: black;
  margin-bottom: 30px;
`;

@inject('helloStore')
@observer
export default class MineScreen extends BaseScreen {
    static navigationOptions = {
        headerTitle: '接口'
    };

    // one click per seconds
    loadData = lodash.debounce(() => this.props.helloStore.getHello(), 1000);
    
    componentDidMount() {
        this.loadData();
    }
    
    _onPress = () => {
        this.loadData();
    };
    
    renderContent() {
        return (
            <Container>
                <Tip>{'please run `node server.js` first'}</Tip>
                <Label>{this.props.helloStore.text}</Label>
                <Label>{this.props.helloStore.time}</Label>
                <Button color="red"
                        title={'Say Something...'} 
                        onPress={this._onPress}/>
            </Container>
        );
    }
}
