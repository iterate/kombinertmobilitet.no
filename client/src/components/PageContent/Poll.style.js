import React from 'react';
import styled from 'styled-components';

export const Page = styled.div`
  color: black;
  font-family: var(--sans);
  font-size: 16px;
`;

export const Question = styled.div`
  line-height: 1.34;
`;

export const Answers = styled.ul`
  margin-top: 28px;
  line-height: 1.69;
`;

const Ans = styled.li`
  list-style: none;
  display: list-item;
  margin-left: 32px;

  position: relative;
  cursor: pointer;
`;

const Svg = styled.svg`
  position: absolute;
  left: -1.6em;
  top: 0.3em;
`;
const RadioButton = ({ selected }) => (
  <Svg width="16" height="16">
    <circle cx="8" cy="8" r="6.5" fill="none" stroke="black" stroke-width="1.3" />
    {selected &&
      <circle cx="8" cy="8" r="3.5" fill="black" />
    }
  </Svg>
);

export const Answer = ({ selected, onClick, children }) => (
  <Ans onClick={onClick}>
    <RadioButton selected={selected} />
    {children}
  </Ans>
);
