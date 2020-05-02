import React from 'react'

import { Principal, CardSlider, CardSliderTitle, Card, CardTitle, CardDescricao, CardFoot} from './style';

export const Conteudo = (data) => (
    <Principal>
        <CardSliderTitle>{data.id}</CardSliderTitle>
        <CardSlider>
            <Card>
                <CardTitle>Titulo Filme</CardTitle>
                <CardDescricao>Descrissão do Filme</CardDescricao>
                <CardFoot/>
            </Card>
        </CardSlider>
    </Principal>
);
