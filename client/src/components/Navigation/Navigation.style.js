import styled from 'styled-components';

export const Color = styled.div`
  mix-blend-mode: difference;
  transition: color 1s linear;

  color: white;
  ${p => p.atIntro && `
    color: var(--pastel-blue);
  `}
  ${p => p.atExperiment && `
    color: var(--light-gray);
  `}
  ${p => p.atSummary && `
    color: white;
  `}
`;
