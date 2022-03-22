import styled from 'styled-components';
import { colors } from '.';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 26px 19px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  padding: 26px 19px;
`;

export const Title = styled.h2`
  display: flex;
  font-size: 22px;
  color: ${colors.textTitle};
  font-weight: regular;
`;
