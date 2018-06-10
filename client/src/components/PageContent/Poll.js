import React from 'react';
import * as S from './Poll.style.js';

export default class Poll extends React.Component {

  state = {
    selectedAns: void 0
  }

  render() {
    const { poll } = this.props;
    const { selectedAns } = this.state;
    const willSelect = (ans) => () => this.setState({ selectedAns: ans });

    return (
      <S.Page>
        <S.Question>
          {poll.question}
        </S.Question>
        <S.Answers>
          {poll.answerAlternatives.map(ans =>
            <S.Answer
              key={ans.text}
              selected={selectedAns === ans}
              onClick={willSelect(ans)}
            >
              {ans.text}
            </S.Answer>
          )}
        </S.Answers>
      </S.Page>
    );
  }
}
