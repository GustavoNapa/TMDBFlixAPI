import styled from 'styled-components/native';

export const Principal = styled.View`
    margin-top: 30px;
    align-items: center;
`;

export const CardSlider = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingRight: 20 },
    showHorizontalScrollIndicator: false,
})``;


export const CardSliderTitle = styled.Text`
    text-align: left;
    font-size: 25px;
    font-weight: bold;
    line-height: 40px;
    margin: 5px;
    color: #FEFCFB;
`;

export const Card = styled.View`
    margin-left: 20px;
    width: 280px;
    height: 350px;
    background-color: #001F54;
    border: 1px solid #1282A2;
    justify-content: flex-start;
    padding: 25px 0;
`;

export const CardTitle = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 30px;
    border: 0px solid #AAA;
    border-bottom-width: 1px;
    margin: 0px 25px;
    color: #FEFCFB;
`;

export const CardDescricao = styled.Text`
    padding: 15px;
    text-transform: capitalize;
    font-size: 14px;
    text-align: justify;
    color: #FEFCFB;
`;

export const CardFoot = styled.View`
    margin-top: 10px;
    padding: 15px 0px;
    border: 0px solid #AAA;
    border-top-width: 1px;
    margin: 0px 25px;
`;
