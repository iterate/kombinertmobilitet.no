import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 702px;
  max-height: 80vh;
`;
export const Left = styled.div`
  margin-bottom: auto;
  margin-right: auto;
  padding-right: 40px;
  flex-basis: 50%;
`;
export const Right = styled.div`
  margin-top: auto;
  margin-left: auto;
  padding-left: 40px;
  flex-basis: 50%;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
export const Quote = styled.div`
  font-family: var(--condensed);
  font-size: 36px;
  line-height: 1.17;
  color: black;
`;