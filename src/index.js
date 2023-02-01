import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './containers/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
