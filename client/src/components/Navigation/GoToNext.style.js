import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

export const Link = styled(_Link)`
  padding: 10px;

  z-index: 5;

  position: fixed;
  bottom: 45px;
  right: 30px;

  cursor: pointer;;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
`;
