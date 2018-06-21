import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  position: fixed;
  top: 30px;
  left: 41px;
  color: black;

  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;

  transition: opacity 500ms linear;

  &.visible {
    opacity: 1;
  }
  &.hidden {
    opacity: 0;
  }
`;

export default class SiteTitle extends React.PureComponent {
    state = {
        isOnFirstPage: true
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onChange);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onChange);
    }
    onChange = () => {
        this.setState({
            isOnFirstPage: window.scrollY < 100 // Pages are at least 100px high
        });
    }
    render() {
        return (
            <Title className={this.state.isOnFirstPage ? 'hidden' : 'visible'}>
                Kombinert mobilitet
            </Title>
        );
    }
}
