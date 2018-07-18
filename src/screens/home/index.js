'use strict';

import React from 'react';
import styled from 'styled-components/native';
import { SectionList } from 'react-native';
import BaseScreen from '../BaseScreen';
import { HomeList } from '../../mock/index';

const Container = styled.View`
  flex: 1;
  margin: 10px
`;
const Header = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: left;
  height: 30px;
  line-height: 30px;
  background: red;
`;
const ItemLabel = styled.Text`
  color: blue;
  font-size: 14px;
  text-align: left;
  height: 44px;
  line-height: 44px;
  background: white;
  border-width: 1px;
  border-color: red;
  margin-bottom: 5px;
`;

export default class HomeScreen extends BaseScreen {
    static navigationOptions = {
        headerTitle: '主页'
    };
    
    _renderItem = (data) => {
        return (
            <ItemLabel onPress={() => {
                this.openPage(data.item.page, { headerTitle: data.item.headerTitle });
            }}>
                {data.item.headerTitle}
            </ItemLabel>
        );
    };

    _renderSectionHeader = (data) => {
        return <Header>{data.section.title}</Header>;
    };

    renderContent() {
        return (
            <Container>
                <SectionList
                    sections={HomeList}
                    keyExtractor={(_, i) => i}
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}/>
            </Container>
        );
    }
}
