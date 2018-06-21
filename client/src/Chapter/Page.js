import React from 'react';
import * as S from './Chapter.style.js';
import HashScroller from 'components/HashScroller';
import Colophon from './Intro/Colophon';

export default class Page extends React.Component {
  render() {
    return (
      <HashScroller hash={this.props.hash}>
        <S.PageWrapper backgroundColor={this.props.backgroundColor}>
          <S.Page>
            {this.props.children}
          </S.Page>
          {this.props.isFirstPage &&
            <Colophon />
          }
        </S.PageWrapper>
      </HashScroller>
    );
  }
}
