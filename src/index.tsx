import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import Demo from './useFetch/Demo';
import App from './views/App';

ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
