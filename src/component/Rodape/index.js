import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { RodapeConteiner, RodapeConteinerText, RodapeConteinerLine} from './style';

export default class Rodape extends Component {
    render() {
        return (
            <RodapeConteiner>
                <RodapeConteinerLine>
                    <Icon name="git" style={{color: '#FFF'}} size={20} />
                    <RodapeConteinerText style={{color: '#FFF',}}> textInComponent </RodapeConteinerText>
                </RodapeConteinerLine>
            </RodapeConteiner>
        )
    }
}
