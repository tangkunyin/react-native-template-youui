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
    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.state.params.headerTitle
    });

    goBack = () => {
        this.props.navigation.goBack && this.props.navigation.goBack();
    };
    
    openPage = (page, params) => {
        this.props.navigation.navigate && this.props.navigation.navigate(page, params);
    };
    
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
