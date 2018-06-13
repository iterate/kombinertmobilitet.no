import React from 'react';
import * as S from './Poll.style.js';
import AnswerStats from './AnswerStats';

import REQ from 'util/REQ';
import {
  addListener,
  removeListener,
  syncSubmittedAnswers,
  unSyncSubmittedAnswers,
  submitAnswer,
  getStateFor,
} from './pollStore';

export default class Poll extends React.Component {

  state = {
    selectedAns: void 0
  }

  componentWillMount() {
    syncSubmittedAnswers(this.props.poll);
    addListener(this.props.poll, this.onChange);
  }
  componentWillUnmount() {
    unSyncSubmittedAnswers(this.props.poll);
    removeListener(this.props.poll, this.onChange);
  }
  onChange = () => {
    this.forceUpdate();
  }

  willSelect = (ans) => () => {
    this.setState({ selectedAns: ans });

    window.clearTimeout(this.timeout);
    this.timeout = window.setTimeout(
      () => submitAnswer(this.props.poll, ans),
      1000
    );
  }

  render() {
    const { poll } = this.props;
    const { selectedAns } = this.state;
    const { req, answerText } = getStateFor(this.props.poll).submitAnswerAsync;
    const hasAnswered = req === REQ.SUCCESS;

    return (
      <S.Page>
        <S.Question>
          {poll.question}
        </S.Question>
        <S.Answers>
          {poll.answerAlternatives.map(ans =>
            <S.Answer
              key={ans.text}
              selected={answerText === ans.text || selectedAns === ans}
              onClick={hasAnswered ? void 0 : this.willSelect(ans)}
              disabled={hasAnswered}
            >
              {ans.text}
              {hasAnswered &&
                <AnswerStats poll={poll} ans={ans} />
              }
            </S.Answer>
          )}
        </S.Answers>
      </S.Page>
    );
  }
}
