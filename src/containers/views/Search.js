'use strict';

import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import lodash from 'lodash';

import SearchInput from '../../components/SearchInput';
import ListItem from '../../components/ListItem';

import type { SearchStore } from '../../config/Types';

type Props = {
    searchStore: SearchStore;
};

const Container = styled.View`
  margin: 15px;
`;

@inject('searchStore')
@observer
export default class Search extends PureComponent {
    props: Props;
    @observable query = '';

    static navigationOptions = {
        title: '线上'
    }

    debounceInput = lodash.debounce((query) => { this.props.searchStore.getTrackList(query); }, 500);

    onTextInputChange = (value: string) => {
        this.query = value;
        this.debounceInput(value);
    }

    render() {
        return (
            <Container>
                <SearchInput
                    value={this.query}
                    onChangeText={(value) => { this.onTextInputChange(value); }}
                    placeholder="Search..."
                />
                {this.props.searchStore.tracks && (
                    <FlatList
                        data={this.props.searchStore.tracks}
                        keyExtractor={(_, i) => i}
                        renderItem={({ item }) => (
                            <ListItem
                                imageUrl={item.album.images[0].url && item.album.images[0].url}
                                songName={item.name}
                            />
                        )}
                    />
                )}
            </Container>
        );
    }
}
