'use strict';

import React from 'react';
import styled from 'styled-components/native';
import BaseScreen from './BaseScreen';

const Container = styled.View`
  flex: 1;
`;

export default class BaseSubScreen extends BaseScreen {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.navigation.goBack && this.props.navigation.goBack();
    }

    renderContent() {
        return (
            <Container/>
        );
    }
}
