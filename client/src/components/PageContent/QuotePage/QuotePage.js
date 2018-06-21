import React from 'react';
import * as S from './QuotePage.style.js';
import { getImageUrl } from 'sanity';

export default class QuotePage extends React.Component {

    render() {
        const { quotePage } = this.props;

        return (
            <S.Container>
                <S.Left>
                    <S.Image src={getImageUrl(quotePage.image).ignoreImageParams().width(422).height(282).fit('max').url()} />
                </S.Left>
                <S.Right>
                    <S.Quote>{quotePage.quote}</S.Quote>
                </S.Right>
            </S.Container>
        );
    }
}
