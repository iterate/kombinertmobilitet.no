import styled from 'styled-components';

export const Chapter = styled.section`
  &.intro {
    background-color: var(--pastel-blue);
    color: black;
  }
  &.experiment {
    background-color: var(--light-gray);
    color: black;
  }
  &.summary {
    background-color: black;
    color: white;
  }
`;

Chapter.Title = styled.section`
  font-family: var(--sans);
  font-size: 64px;
  line-height: 1.14;

  margin-bottom: 100px;
`;

export const Page = styled.div`
  box-sizing: border-box;
  margin: auto;
  padding: 150px 0;
  max-width: 855px;
  height: 100vh;

  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.34;
`;
