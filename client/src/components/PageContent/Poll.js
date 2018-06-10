import React from 'react';
import * as S from './Poll.style.js';
import {
  pollStore,
  getPollAsync,
  getSubmitAsync,
  fetchPoll,
  submitAnswer,
} from './pollStore';

export default class Poll extends React.Component {

  state = {
    selectedAns: void 0
  }

  componentWillMount() {
    fetchPoll(this.props.pollId);
    pollStore.addListener(this.onChange);
  }
  componentWillUnmount() {
    pollStore.removeListener(this.onChange);
  }

  onChange = () => {
    this.forceUpdate();
  }

  willSelect = (ans) => () => {
    this.setState({ selectedAns: ans });
    window.clearTimeout(this.timeout);
    this.timeout = window.setTimeout(this.saveToSanity, 1000);
  }

  saveToSanity = () => {
    submitAnswer(this.props.pollId, this.state.selectedAns);
  }

  render() {
    const { poll, req } = getPollAsync(this.props.pollId);
    const { selectedAns } = this.state;

    if (!poll) {
      console.log(req);
      return false;
    }

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
              onClick={this.willSelect(ans)}
            >
              {ans.text}
            </S.Answer>
          )}
        </S.Answers>
      </S.Page>
    );
  }
}
