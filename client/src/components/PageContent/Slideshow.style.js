import styled from 'styled-components';

export const Slideshow = styled.div`
  width: 900px;
  height: 730px;
  position: relative;
`;
export const Progress = styled.span`
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;

  position: absolute;
  top: 650px;
  right: 0;
`;

export const Container = styled.div`
  width: 854px;
  height: 730px;
  position: relative;
  overflow: hidden;
`;

export const Navigation = styled.div`
  z-index: 2;
  position: absolute;

  top: 0;
  bottom: 0;

  &.previous {
    left: 0;
    right: 50%;
    cursor: url(${require('./left.png')}), w-resize;
  }
  &.next {
    left: 50%;
    right: 0;
    cursor: url(${require('./right.png')}), e-resize;
  }
  &.hidden {
    display: none;
  }
`;

export const Track = styled.div`
  height: 666px;
  position: absolute;
  top: 0;
  left: -${p => p.slideNo * 854}px;

  transition: left 300ms ease;

  display: flex;
`;
export const Slide = styled.div`
`;
export const ImageWrapper = styled.div`
  width: 854px;
  height: 666px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
`;
export const SubText = styled.div`
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.34;
`;
