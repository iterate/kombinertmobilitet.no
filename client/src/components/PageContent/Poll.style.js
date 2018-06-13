import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  ${p => p.disabled ? 'cursor: initial' : ''};
`;

const Svg = styled.svg`
  position: absolute;
  left: -1.6em;
  top: 0.3em;
`;
const RadioButton = ({ selected }) => (
  <Svg width="16" height="16">
    <circle cx="8" cy="8" r="6.5" fill="none" stroke="black" strokeWidth="1.3" />
    {selected &&
      <circle cx="8" cy="8" r="3.5" fill="black" />
    }
  </Svg>
);

export const Answer = ({ selected, onClick, disabled, children }) => (
  <Ans onClick={onClick} disabled={disabled}>
    <RadioButton selected={selected} />
    {children}
  </Ans>
);


const appearY25 = keyframes`
  from {
    height: 0px;
  }
  to {
    height: 25px;
  }
`;
const appearY18 = keyframes`
  from {
    height: 0px;
  }
  to {
    height: 18px;
  }
`;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.75;

  animation-name: ${appearY25};
  animation-duration: 500ms;
  animation-fill-mode: both;
  overflow: hidden;
`;
export const Percentage = styled.div`
  margin-left: 10px;
  min-width: 40px;
  text-align: right;
  color: black;
`;
export const Count = styled.div`
  margin-left: 10px;
  min-width: 20px;
  text-align: right;
  color: var(--bright-orange);
`;

const appearX = keyframes`
  from {
    max-width: 0%;
  }
  to {
    max-width: 100%;
  }
`;

const BarContainer = styled.div`
  position: relative;
  width: 422px;

  animation-name: ${appearY18};
  animation-duration: 500ms;
  animation-fill-mode: both;

  box-sizing: border-box;

  border: 1px solid black;
`;
const BarFilled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${p => p.percentage}%
  box-sizing: border-box;

  background-color: black;

  animation-name: ${appearX};
  animation-delay: 600ms;
  animation-duration: 3s;
  animation-fill-mode: both;
  animation-timing-function: linear;
`;

export const Bar = ({ percentage }) => (
  <BarContainer>
    <BarFilled percentage={percentage} />
  </BarContainer>
);
