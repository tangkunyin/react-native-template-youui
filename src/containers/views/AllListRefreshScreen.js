'use strict';

import React from 'react';
import styled from 'styled-components/native';
import BasePage from '../../components/BasePage';


const Container = styled.View`
  flex: 1;
  margin: 15px;
`;

export default class AllListRefreshScreen extends BasePage {

    render() {
        return (
            <Container/>
        );
    }
}
