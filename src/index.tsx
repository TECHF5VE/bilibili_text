import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Demo from './useFetch/Demo';

ReactDOM.render(<Demo />, document.getElementById('root'));


registerServiceWorker();
