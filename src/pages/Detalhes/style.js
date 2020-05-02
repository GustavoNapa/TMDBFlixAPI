import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 0 30px;
    background-color: #0A1128;
`;

export const Principal = styled.ScrollView.attrs({

})``;

export const Card = styled.View`
    width: 100%;
    margin-left: 10px;
    justify-content: flex-start;
`;

export const CardImagem = styled.View`
    width: 100%;
    align-items: center;
`;

export const CardTitle = styled.Text`
    text-align: center;
    font-size: 28px;
    color: #FEFCFB;
`;

export const CardDescricao = styled.Text`
    padding: 15px;
    text-transform: capitalize;
    font-size: 14px;
    text-align: justify;
    color: #FEFCFB;
`;

export const CardInfo = styled.View`
    margin-top: 10px;
    padding: 15px 0px;
    border: 0px solid #AAA;
    border-top-width: 1px;
    margin: 0px 25px;
`;

export const CardInfoNota = styled.Text`
    color: #FEFCFB;
`;