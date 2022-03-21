import React from 'react';

import { Container, Header, Title } from '@/styles/middleContainer';
import Line from '../Line';

interface IMiddleContainerProps {
  title: string;
}

const MiddleContainer = ({ title = 'TESTE' }: IMiddleContainerProps) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Line />
      </Header>
        <p>Middle Container</p>
    </Container>
  );
}

export default MiddleContainer;