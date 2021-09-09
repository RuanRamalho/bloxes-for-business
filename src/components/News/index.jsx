import React from 'react';
import { Container } from 'react-bootstrap';
import Energy from '../Energy';
import { NewsContent } from './styles';

const News = () => (
  <Container>
    <NewsContent>
      <h1>Energia</h1>
      <Energy />
    </NewsContent>
  </Container>
);

export default News;
