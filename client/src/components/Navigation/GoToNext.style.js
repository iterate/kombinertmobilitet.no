import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

export const Link = styled(_Link)`
  z-index: 5;

  position: fixed;
  bottom: 55px;
  right: 40px;

  cursor: pointer;;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  mix-blend-mode: difference;
  transition: color 1s linear;
  color: ${p => p.color};
`;
