'use strict';

import React from 'react';
import styled from 'styled-components/native';
import { SectionList } from 'react-native';
import BasePage from '../components/BasePage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { sections } from '../mock/OfflineData';

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

export default class OfflineIndex extends BasePage {

    static navigationOptions = {
        title: '线下',
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'home'} color={tintColor} size={24}/>
        )
    };

    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this);
        this._renderSectionHeader = this._renderSectionHeader.bind(this);
    }


    _renderItem(data) {
        return (
            <ItemLabel onPress={() => {
                this.openPage(data.item.page, { title: data.item.title });
            }}>
                {data.item.title}
            </ItemLabel>
        );
    }

    _renderSectionHeader(data) {
        return <Header>{data.section.title}</Header>;
    }

    render() {
        return (
            <Container>
                <SectionList
                    sections={sections}
                    keyExtractor={(_, i) => i}
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}/>
            </Container>
        );
    }
}
