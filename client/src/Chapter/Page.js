import React from 'react';
import * as S from './Chapter.style.js';
import HashScroller from 'components/HashScroller';
import Colophon from './Intro/Colophon';

export default class Page extends React.Component {
  render() {
    return (
      <HashScroller hash={this.props.hash}>
        <S.PageWrapper>
          <S.Page>
            {this.props.children}
          </S.Page>
        </S.PageWrapper>
        {this.props.withColophon &&
          <Colophon />
        }
      </HashScroller>
    );
  }
}
