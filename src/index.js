import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//css
import './styles/reset.css';
import './styles/index.css';

//components
import Header from './components/Header/Header';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';

//pages
import AppRouter from './routes/Routes';
// import Home from './pages/Home/Home';

/**
 * Contains the base of the App and the routes.
 * @component
 * @returns Return the `Header`, `LeftSideBar` and `Home` components.
 */
ReactDOM.render(
  <React.StrictMode>
    <>
      <Header />

      <div id="main_box">
        <LeftSideBar />
        <AppRouter />
      </div>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
