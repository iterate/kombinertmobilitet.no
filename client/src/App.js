import React, { Component } from 'react';
import Chapter from 'Chapter';

import { appStore, fetchContent } from 'appStore';
import REQ from 'util/REQ';

class App extends Component {
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
    const { req, content } = appStore.contentAsync;

    switch (req) { // eslint-disable-line default-case
      case REQ.INIT:
      case REQ.PENDING:
        return <div>Laster...</div>;
      case REQ.ERROR:
        return <div>Noe gikk galt!</div>;
      case REQ.SUCCESS:
        console.debug(`content.experimentChapters`, content.experimentChapters); // DEBUG
        return (
          <div>
            {content.introChapters.map(chapter =>
              <Chapter.Intro key={chapter._id} chapter={chapter} />
            )}
            {content.experimentChapters.map((chapter, index) =>
              <Chapter.Experiment key={chapter._id} index={index} chapter={chapter} />
            )}
            {content.summaryChapters.map(chapter =>
              <Chapter.Summary key={chapter._id} chapter={chapter} />
            )}
          </div>
        );
    }
  }
}

export default App;
