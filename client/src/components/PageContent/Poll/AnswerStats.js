import React from 'react';
import * as S from './AnswerStats.style.js';
import REQ from 'util/REQ';
import { getStateFor } from './pollStore';

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

    const getCount = ans => answerMap[ans.text] || 0;

    const actual = {
      count:  getCount(ans),
      percentage: 100 * getCount(ans) / (totalAnswerCount || 1),
    };

    this.maxPercent++;

    if (this.maxPercent === 100) {
      clearInterval(this.interval);
    }

    const percentage = Math.min(this.maxPercent, actual.percentage);
    const count = Math.round(actual.count * (percentage / (actual.percentage || 1)));
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

export default class AnswerStats extends React.Component {

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
