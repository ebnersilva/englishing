import React from 'react';
import { GearIcon, InfoIcon } from '@/assets/icons';
import { Verb } from '@/constants/verbs';
import { Container, Header, Content } from '@/styles/middleContainer';
import Line from '../Line';

interface IMiddleContainerProps {
  title: string;
  verb: Verb;
}

const MiddleContainer = ({ title = '2:35', verb }: IMiddleContainerProps) => {
  const handleClickSettings = () => {};

  const handleClickInfo = () => {};

  return (
    <Container>
      <Header>
        <button type="button" onClick={handleClickSettings}>
          <GearIcon />
        </button>
        <h2>{title}</h2>
        <button type="button" onClick={handleClickInfo}>
          <InfoIcon />
        </button>
      </Header>
      <Content>
        <p>
          <strong>Base Verb:</strong> {verb.baseVerb}
        </p>
        <p>
          <strong>Past Simple:</strong> {verb.pastSimple}
        </p>
        <p>
          <strong>Past Participle:</strong> {verb.pastParticiple}
        </p>
        <p>
          <strong>Translated:</strong> {verb.translated}
        </p>
      </Content>
    </Container>
  );
};

export default MiddleContainer;
