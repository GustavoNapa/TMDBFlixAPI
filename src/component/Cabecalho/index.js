import React from 'react';

import {Image} from 'react-native';

import { CabecalhoContent, CabecalhoTexto } from './style';

export const Cabecalho = () => (
    <CabecalhoContent>
        <Image source={{
            uri: 'https://raw.githubusercontent.com/zisiszikos/the-movie-db-example/master/tmdb.png'}}
            style={{ width: 300, height: 118 }} />
        <CabecalhoTexto>
            By: Gustavo Souza
        </CabecalhoTexto>
    </CabecalhoContent>
);