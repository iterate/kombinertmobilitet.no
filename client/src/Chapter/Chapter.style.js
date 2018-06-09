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
`;

export const Page = styled.div`
  box-sizing: border-box;
  margin: auto;
  padding-bottom: 200px;
  max-width: 855px;

  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.34;
`;

export const SiteTitle = styled.div`
  position: absolute;
  top: 30px;
  left: 41px;
  color: black;

  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
`;
