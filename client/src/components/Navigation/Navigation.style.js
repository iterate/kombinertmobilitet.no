import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

export const Navigation = styled.div`
  z-index: 5;

  position: fixed;
  left: 41px;
  top: 38px;
  bottom: 28px;

  font-family: var(--mono);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.79;
  color: ${p => p.isAtSummary ? 'white' : 'black'};
`;

export const Link = styled(_Link)`
  display: block;
  color: black;

  text-decoration: line-through;

  &.active ~ a {
    text-decoration: none;
  }

  &.active {
    text-decoration: underline;
  }

  &.subchapter {
    margin-left: 2em;
  }
`;
