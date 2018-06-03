import styled from 'styled-components';

export const Container = styled.div`
  width: 854px;
  height: 666px;
  background-color: #d8d8d8;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.img`
  z-index: 2;

  padding: 20px;
  width: 18px;
  height: 18px;
  object-fit: contain;

  cursor: pointer;

  &.previous {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 100px;
  }
  &.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
    right: 100px;
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
  position: relative;
`;
export const Image = styled.img`
  width: 854px;
  height: 666px;
`;
export const SubText = styled.div`
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.34;

  z-index: 1;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
`;
