import React from 'react';
import * as S from './Chapter.style.js';
import HashScroller from 'components/HashScroller';

export default class Page extends React.Component {
  render() {
    return (
      <HashScroller hash={this.props.hash}>
        <S.PageWrapper>
          <S.Page>
            {this.props.children}
          </S.Page>
        </S.PageWrapper>
      </HashScroller>
    );
  }
}
