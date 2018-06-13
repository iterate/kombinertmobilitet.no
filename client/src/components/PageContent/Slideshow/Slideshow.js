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

    const { slideNo } = this.state;

    return (
      <S.Slideshow>
        <S.Container>
          <S.Navigation className="previous" onClick={changeBy(-1)} hidden={slideNo < 1} />
          <S.Navigation className="next" onClick={changeBy(1)} hidden={slideNo > slideshow.slides.length - 2} />
          <S.Track slideNo={this.state.slideNo}>
            {slideshow.slides.map(slide =>
              <S.Slide key={slide._key}>
                <S.ImageWrapper>
                  <S.Image src={getImageUrl(slide.image).url() + '?w=854&h=666&fit=max'} />
                </S.ImageWrapper>
                <S.SubText>{slide.subtext}</S.SubText>
              </S.Slide>
            )}
          </S.Track>
        </S.Container>
        <S.Progress>{this.state.slideNo + 1}/{slideshow.slides.length}</S.Progress>
      </S.Slideshow>
    );
  }
}
