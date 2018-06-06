import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

export const Link = styled(_Link)`
  position: fixed;
  bottom: 55px;
  right: 40px;

  cursor: pointer;
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
