import React from 'react';
import * as S from './Colophon.style.js'
import { appStore } from 'appStore';

export default class Colophon extends React.Component {

  state = {
    isOpen: false,
  };

  render() {
    const { isOpen } = this.state;
    const willOpen = (isOpen) => () => this.setState({ isOpen });

    const { colophon } = appStore.contentAsync.content;

    const ButtonOpen = this.props.isLastPage
      ? S.ButtonOpenLastPage
      : S.ButtonOpen;

    return (
      <S.Wrapper>
        <ButtonOpen onClick={willOpen(true)}>
          ↑ Åpne kolofon
        </ButtonOpen>
        <S.Colophon isOpen={isOpen}>
          <S.ButtonClose onClick={willOpen(false)}>
            × Lukk kolofon
          </S.ButtonClose>
          <S.Center>
            <S.Top>
              {colophon.description}
            </S.Top>
            <S.Bottom>
              {colophon.infoLists.map(list =>
                <S.List key={list.title}>
                  <S.ListTitle>
                    {list.title}
                  </S.ListTitle>
                  {list.items.map(item =>
                    <S.ListItem key={item}>
                      {item}
                    </S.ListItem>
                  )}
                </S.List>
              )}
            </S.Bottom>
          </S.Center>
        </S.Colophon>
      </S.Wrapper>
    );
  }
}
