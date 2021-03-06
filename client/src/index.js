import './firebaseInit';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

require('smoothscroll-polyfill').polyfill();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
