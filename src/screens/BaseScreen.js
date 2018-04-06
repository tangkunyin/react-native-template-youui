'use strict';

import React, { Component } from 'react';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';
import AppStatusBar from '../components/widgets/AppStatusBar';

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background}
`;

export default class BaseScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        tabBarVisible: false,
        headerTitle: navigation.state.params.title
    });

    constructor(props) {
        super(props);
        this.openPage = this.openPage.bind(this);
    }

    openPage(page, params) {
        this.props.navigation.navigate && this.props.navigation.navigate(page, params);
    }
    
    renderContent() {
        return null;
    }
    
    render() {
        return (
            <Container>
                <AppStatusBar />
                {this.renderContent()}
            </Container>
        );
    }
}
