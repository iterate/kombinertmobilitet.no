import React from 'react';
import * as S from './Slideshow.style.js';
import { getImageUrl } from 'sanity';

export default class Slideshow extends React.Component {

  state = {
    slideNo: 0
  }

  render() {
    const { slideshow } = this.props;
    const changeBy = (number) => () => this.setState(state => ({ slideNo: state.slideNo + number }));

    return (
      <S.Container>
        <S.Arrow src={require('./west.svg')} className="previous" onClick={changeBy(-1)} />
        <S.Arrow src={require('./west.svg')} className="next" onClick={changeBy(1)} />
        <S.Track slideNo={this.state.slideNo}>
          {slideshow.slides.map(slide =>
            <S.Slide>
              <S.Image src={getImageUrl(slide.image).width(854).height(666).fit('scale').url()} />
              <S.SubText>{slide.subtext}</S.SubText>
            </S.Slide>
          )}
        </S.Track>
      </S.Container>
    );
  }
}
