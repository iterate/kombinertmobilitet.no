import React from 'react';
import styled from 'styled-components';

export const Chapter = styled.section`
  background-color: var(--pastel-blue);
`;

Chapter.Title = styled.section`
  font-family: var(--sans);
  font-size: 64px;
  line-height: 1.14;
  color: black;

  margin-bottom: 100px;
`;

export const Page = styled.div`
  margin: auto;
  padding: 150px 0;
  max-width: 855px;
  height: 100vh;

  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.34;
  color: #000000;
`;
