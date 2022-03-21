import styled from 'styled-components';
import { colors } from '.';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.secondary};
  border: 1px solid ${colors.border};

  border-radius: 8px;
  
  height: 500px;
  width: 1100px;
`;

export const Title = styled.p`
  font-size: 62px;
  font-weight: regular;
  color: ${colors.textTitle};
  background: red;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100px;
`;