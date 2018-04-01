'use strict';

import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  margin-vertical: 15;
  backgroundColor: green;
  padding: 10px
`;

const Input = styled.TextInput`
  color: gray;
  height: 20;
  font-size: 18;
`;

type Props = {
    value: string,
    placeholder?: string,
    onChangeText: Function,
}

export default function SearchInput(props: Props) {
    return (
        <Container>
            <Input {...props} />
        </Container>
    );
}
