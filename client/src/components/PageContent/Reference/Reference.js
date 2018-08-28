import React from 'react';
import REQ from 'util/REQ';
import { refStore, fetchDocument, getDocumentAsync } from './refStore';

export default class Reference extends React.Component {
  componentWillMount() {
    const { _ref } = this.props.obj;

    fetchDocument(_ref);
    refStore.addListener(this.onChange, _ref);
  }
  componentWillUnmount() {
    const { _ref } = this.props.obj;

    refStore.removeListener(this.onChange, _ref);
  }
  onChange = () => {
    this.forceUpdate();
  }

  render() {
    const { PageContent } = this.props;
    const { req, doc } = getDocumentAsync(this.props.obj._ref);

    switch (req) { // eslint-disable-line default-case
      case REQ.INIT:
      case REQ.PENDING:
        return <div>Laster...</div>;
      case REQ.ERROR:
        return <div>Noe gikk galt</div>;
      case REQ.SUCCESS:
        return <PageContent page={doc} />;
    }
  }
}
