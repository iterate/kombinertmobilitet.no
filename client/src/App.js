import React, { Component } from 'react';
import { appStore, fetchContent } from 'appStore';

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
    console.log(`appStore.contentAsync`, appStore.contentAsync); // DEBUG
    return (
      <div>
        Hello Kombinert Mobilitet!
      </div>
    );
  }
}

export default App;
