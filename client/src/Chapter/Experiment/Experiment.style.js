import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OverviewPage = styled.div`
  background-color: var(--light-gray);
  color: black;
  position: relative;
`;

export const OverviewPageContent = styled.div`
  box-sizing: border-box;
  margin: auto;
  padding: 250px 0;
  max-width: 700px;
  height: 100vh;
`;

export const Title = styled.div`
  font-family: var(--sans);
  font-size: 36px;
  line-height: 1.17;

  margin-bottom: 90px;
`;

export const SubChapterLink = styled(Link)`
  display: block;

  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline solid black;
  }

  font-family: var(--sans);
  font-size: 24px;
  line-height: 2.25;

  padding-left: 72px;
`;

export const Star = styled.span`
  color: var(--turquoise-green);
  font-family: var(--sans);
  display: inline-block;
  transform: translateY(-0.5em);
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 28px;
  right: 41px;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.75;
`;
