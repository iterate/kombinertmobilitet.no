import React from 'react';
import styled from 'styled-components';

export const InfoBlock = styled.div`
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.34;
  padding-right: 73px;
`;
export const InfoTuple = styled.div`
  margin: 1em 0;
`;

const Info = ({ info }) => {
  if (!info) {
    return false;
  }

  return (
    <InfoBlock>
      {info.map(({ key, value }) =>
        <InfoTuple key={key}>
          {key}:<br/>
          {value}
        </InfoTuple>
      )}
    </InfoBlock>
  );
}

export default Info;
