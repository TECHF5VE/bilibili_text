import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import Demo from './useFetch/Demo';
import App from './main/App';
// import App from './views/user';
// import App from './Transtion'


ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
