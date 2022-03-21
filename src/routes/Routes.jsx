import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

//pages
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';

/**
 * The AppRouter function returns a Router component that contains the differents Routes and path of the App.
 * @component
 * @returns A router component.
 */
function AppRouter() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<Navigate to="/dashboard/12" />} />
          <Route path="/dashboard/:userId" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
}

export default AppRouter;
