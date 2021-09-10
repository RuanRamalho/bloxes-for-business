import React from 'react';
import { Container } from 'react-bootstrap';
import Energy from '../Energy';
import Agribusiness from '../Agribusiness';
import { NewsContent } from './styles';

const News = () => (
  <Container>
    <NewsContent>
      <h1>Energia</h1>
      <Energy />
      <h1>Agronegócio</h1>
      <Agribusiness />
    </NewsContent>
  </Container>
);

export default News;
