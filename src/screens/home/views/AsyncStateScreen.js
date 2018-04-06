'use strict';

import React from 'react';
import styled from 'styled-components/native';
import BaseSubScreen from "../../BaseSubScreen";

const Container = styled.View`
  flex: 1;
  margin: 15px;
  justify-content: center; 
  align-items: center
`;

const Btn = styled.Button`
  width: 300px;
  height: 40px;
  margin: 15px;
`;

export default class AsyncStateScreen extends BaseSubScreen {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: '按钮1',
                    active: true
                },
                {
                    title: '按钮2',
                    active: false
                },
                {
                    title: '按钮3',
                    active: false
                },
                {
                    title: '按钮4',
                    active: false
                },
                {
                    title: '按钮5',
                    active: false
                },
            ]
        };
    }

    _onBtnPress(index, active) {
        const data = this.state.data.map((item, i) => {
            return {
                title: `按钮${i + 1}`,
                active: index === i ? !active : false
            };
        });
        console.log('before', index, active);
        this.setState({ data });
        console.log('after', index, active);
    }

    renderContent() {
        return (
            <Container>
                {
                    this.state.data.map((item, index) => {
                        return <Btn key={index}
                                    title={item.title}
                                    color={item.active ? 'red' : 'green'}
                                    onPress={() => {
                                        this._onBtnPress(index, item.active);
                                    }}/>;
                    })
                }
            </Container>
        );
    }
}
