'use strict';

import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import GlobalStatusBar from './GlobalStatusBar';

const Container = styled.View`
  flex: 1;
`;

export default class BasePage extends PureComponent {

    static navigationOptions = ({ navigation, screenProps }) => ({
        tabBarVisible: false,
        headerTitle: navigation.state.params.title
    });

    constructor(props) {
        super(props);
        this.openPage = this.openPage.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    openPage(page, params) {
        this.props.navigation.navigate && this.props.navigation.navigate(page, params);
    }

    goBack() {
        this.props.navigation.goBack && this.props.navigation.goBack();
    }

    render() {
        return (
            <Container/>
        );
    }
}
