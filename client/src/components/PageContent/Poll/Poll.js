import React from 'react';
import * as S from './Poll.style.js';
import REQ from 'util/REQ';
import {
  addListener,
  removeListener,
  syncSubmittedAnswers,
  unSyncSubmittedAnswers,
  submitAnswer,
  getStateFor,
} from './pollStore';

const sumTotal = (sum, next) => sum + next;

class ResultThingy extends React.Component {

  state = {
    percentage: 0,
    percentageString: 0,
    count: 0,
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.interval = setInterval(this.update, 30);
      this.timeout = setTimeout(() => clearInterval(this.interval), 30 * 99.5);
    }, 600);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
  }

  maxPercent = 0
  update = () => {
    const { ans, answerMap } = this.props;

    const totalAnswerCount = Object.values(answerMap).reduce(sumTotal, 0);

    const actual = {
      count:  answerMap[ans.text],
      percentage: 100 * answerMap[ans.text] / totalAnswerCount,
    };

    this.maxPercent++;

    const percentage = Math.min(this.maxPercent, actual.percentage);
    const count = Math.round(actual.count * (percentage / actual.percentage));
    const percentageString = Math.round(percentage, 0) + ' %';

    this.setState({
      percentage,
      percentageString,
      count,
      actual,
    });
  }

  render() {
    return (
      <S.Result>
        <S.Bar percentage={this.state.percentage} />
        <S.Percentage>{this.state.percentageString}</S.Percentage>
        <S.Count>{this.state.count}</S.Count>
      </S.Result>
    );
  }
}

class ResultReq extends React.Component {

  render() {
    const { poll, ans } = this.props;
    const { req, answerMap } = getStateFor(poll).prevAnswersAsync;

    if (req !== REQ.SUCCESS) {
      return false;
    }

    return (
      <ResultThingy ans={ans} answerMap={answerMap} />
    );
  }
}

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
                <ResultReq poll={poll} ans={ans} />
              }
            </S.Answer>
          )}
        </S.Answers>
      </S.Page>
    );
  }
}
