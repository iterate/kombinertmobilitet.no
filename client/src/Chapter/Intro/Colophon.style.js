import styled from 'styled-components';

export const Wrapper = styled.div`
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  padding: 10px;
`;
export const ButtonOpen = styled(Button)`
  position: absolute;

  bottom: 85px;
  right: 30px;
`;
export const ButtonOpenLastPage = styled(Button)`
  position: absolute;
  color: white;

  bottom: 45px;
  right: 30px;
`;

export const Colophon = styled.div`
  background-color: var(--butterscotch);
  color: black;

  z-index: 5;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${p => p.isOpen ? 394 : 0}px;
  transition: height 150ms ease-in-out;
  overflow: hidden;
`;

export const ButtonClose = styled(Button)`
  position: absolute;
  right: 40px;
  top: 39px;
`;

export const Center = styled.div`
  padding: 46px 200px;
  margin: auto;
  max-width: 782px;

  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.34;
`;

export const Top = styled.div`
`;

export const Bottom = styled.div`
  margin-top: 39px;
  display: flex;
  justify-content: space-between;
`;
export const List = styled.div`
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.34;
`;
export const ListTitle = styled.div`
  font-weight: 500;
`;
export const ListItem = styled.div``;
