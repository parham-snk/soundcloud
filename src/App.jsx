import logo from './logo.svg';
import "./bootstrap.min.css"
import './App.css';
import Router from './router/router';

function App() {
  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
      </head>
      <Router />
    </div>
  );
}

export default App;
