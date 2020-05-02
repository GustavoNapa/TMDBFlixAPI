import React from 'react'

import {Image} from 'react-native'

import { Container, Card, CardTitle, CardDescricao, CardInfo, CardInfoNota } from './style';

import { Cabecalho } from '~/component/Cabecalho'
import { CardImagem } from '../Main/style';

const Detalhes = ({ navigation }) => (
    <Container>
        <Cabecalho />
        <Card>
            <CardTitle>{navigation.state.params.filme.title}</CardTitle>
            <CardImagem>
                <Image
                    source={{ uri: 'https://image.tmdb.org/t/p/w400' + navigation.state.params.filme.backdrop_path }}
                    style={{ width: 400, height: 280 }}
                />
            </CardImagem>
            <CardInfo>
                <CardInfoNota>Nota: {navigation.state.params.filme.vote_average}</CardInfoNota>
            </CardInfo>
            <CardDescricao>{navigation.state.params.filme.overview}</CardDescricao>
        </Card>
        
    </Container>
)

Detalhes.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.filme.title,
});

export default Detalhes;