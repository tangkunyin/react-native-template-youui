'use strict';

import React from 'react';
import styled from 'styled-components/native';
import BaseSubScreen from "../../BaseSubScreen";

const Container = styled.View`
  flex: 1;
  margin: 15px;
`;

export default class SyncStateScreen extends BaseSubScreen {
    renderContent() {
        return (
            <Container/>
        );
    }
}
