import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import MainPage from 'pages/Main';
import SubChapterPage from 'pages/SubChapter';

import { appStore, fetchContent } from 'appStore';
import REQ from 'util/REQ';

export default class App extends Component {
  componentDidMount() {
    fetchContent();
    appStore.addListener(this.onChange);
  }
  componentWillUnmount() {
    appStore.removeListener(this.onChange);
  }
  onChange = () => {
    this.forceUpdate();
  }
  render() {
    const { req } = appStore.contentAsync;

    switch (req) { // eslint-disable-line default-case
      case REQ.INIT:
      case REQ.PENDING:
        return <div>Laster...</div>;
      case REQ.ERROR:
        return <div>Noe gikk galt!</div>;
      case REQ.SUCCESS:
        return (
          <Router>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/:chapter" component={MainPage} />
              <Route exact path="/:chapter/:subChapter" component={SubChapterPage} />
            </Switch>
          </Router>
        );
    }
  }
}
