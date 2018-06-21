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

Chapter.Title = styled.div`
  font-family: var(--sans);
  font-size: 64px;
  line-height: 1.14;

  margin-bottom: 100px;
`;

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  position: relative;
  background-color: ${p => p.backgroundColor ? p.backgroundColor : 'transparent'};
`;

export const Page = styled.div`
  box-sizing: border-box;
  margin: auto;
  padding-bottom: 8vh;
  max-width: 855px;

  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.34;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
