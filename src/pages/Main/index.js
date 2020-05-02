import React, {Component} from 'react';

import {FlatList, Image} from 'react-native';
import { Cabecalho } from '~/component/Cabecalho';

import { Container, Principal, CardSlider, CardSliderTitle, Card, CardTitle, CardDescricao, CardFoot, CardImagem } from './style';

import api from '~/services/api'
import Rodape from '~/component/Rodape';

export default class Main extends Component {
  api_key = '71010fe69c8ada8675419d014dfe7912';
  language = 'pt-BR'

  state = {
    popularMovies: [],
    top_rate: [],
    latest: [],
    upComing: []
  };

  componentDidMount(){
    this.loadPopularMovies();
    this.loadTopRate();
    this.loadLatest();
    this.loadUpComing();
  }

  loadPopularMovies = async() => {
    const response = await api.get('/movie/popular?api_key='+this.api_key+'&language='+this.language);

    const {data} = response;
    const results = data.results;

    console.log(results);

    this.setState({ popularMovies: results});
  }

  loadTopRate = async () => {
    const response = await api.get('/movie/top_rated?api_key=' + this.api_key + '&language=' + this.language);

    const { data } = response;
    const results = data.results;

    console.log(results);

    this.setState({ top_rate: results });
  }

  loadLatest = async () => {
    const response = await api.get('/movie/now_playing?api_key=' + this.api_key + '&language=' + this.language);

    const { data } = response;
    const results = data.results;

    console.log(results);

    this.setState({ latest: results });
  }

  loadUpComing = async () => {
    const response = await api.get(
      '/movie/upcoming?api_key=' + 
      this.api_key + 
      '&language=' + this.language +
      '&region=BR');

    const { data } = response;
    const results = data.results;

    console.log(results);

    this.setState({ upComing: results });
  }

  renderPopular = ({item}) => (
    <Card>
      <CardImagem>
        <Image
          source={{ uri: 'https://image.tmdb.org/t/p/w200' + item.poster_path }}
        style={{ width: 100, height: 150 }}
        />
      </CardImagem>
      <CardTitle>{item.title}</CardTitle>
    </Card>
  );

  render() {
    return (
      <Container>
        <Cabecalho />
        <Principal>
          <CardSliderTitle>Nos Cinemas</CardSliderTitle>
          <CardSlider>
            <FlatList
              data={this.state.upComing}
              keyExtractor={item => item.id.toString()}
              renderItem={this.renderPopular}
              horizontal
            />
          </CardSlider>
          <CardSliderTitle>Populares</CardSliderTitle>
          <CardSlider>
            <FlatList
              data={this.state.popularMovies}
              keyExtractor={item => item.id.toString()}
              renderItem={this.renderPopular}
              horizontal
            />
          </CardSlider>
          <CardSliderTitle>Melhores avaliados</CardSliderTitle>
          <CardSlider>
            <FlatList
              data={this.state.top_rate}
              keyExtractor={item => item.id.toString()}
              renderItem={this.renderPopular}
              horizontal
            />
          </CardSlider>
          <CardSliderTitle>Assistindo agora</CardSliderTitle>
          <CardSlider>
            <FlatList
              data={this.state.latest}
              keyExtractor={item => item.id.toString()}
              renderItem={this.renderPopular}
              horizontal
            />
          </CardSlider>
        </Principal>
        <Rodape />
      </Container>
    );
  }
}