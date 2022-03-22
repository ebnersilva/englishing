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

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  width: 100%;
  padding: 0 12px;
  border-radius: 8px 8px 0 0;
  position: relative;

  h2 {
    color: ${colors.textTitle};
    letter-spacing: 4px;
    font-weight: 400;
    font-size: 48px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 0;
    transition: all 0.5s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.6);
    }
  }

  svg {
    font-size: 20px;
    color: ${colors.icon};
  }

  h2 + button {
    svg {
      margin-bottom: 4px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    background: ${colors.line};
    height: 1px;
    width: 95%;
    bottom: 4px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;

  p {
    margin: 12px 0 12px 35%;
    color: ${colors.textPrimary};
    font-weight: 400;
    font-size: 24px;

    strong {
      font-size: 24px;
      font-weight: 400;
      color: ${colors.textSecondary};
      margin-right: 24px;
      text-transform: uppercase;
    }
  }
`;
