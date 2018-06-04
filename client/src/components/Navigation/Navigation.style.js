import styled from 'styled-components';

export const Navigation = styled.div`
  position: fixed;
  left: 41px;
  top: 38px;
  bottom: 28px;

  font-family: var(--mono);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.79;
  color: ${p => p.isAtSummary ? 'white' : 'black'};
`;

export const Link = styled.div`
  cursor: pointer;

  ${p => p.active &&
    `text-decoration: underline;`
  }
  ${p => p.passed &&
    `text-decoration: line-through;`
  }

  ${p => p.isSubChapter &&
    `margin-left: 2em;`
  }
`;
