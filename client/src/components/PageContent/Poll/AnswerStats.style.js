import React from 'react';
import styled, { keyframes } from 'styled-components';

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
`;

export const Bar = ({ percentage }) => (
  <BarContainer>
    <BarFilled percentage={percentage} />
  </BarContainer>
);
