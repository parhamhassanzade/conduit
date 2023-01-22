import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactRoute from './routes/Routes';
import Home from './pages/Home';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={reactRoute.home} element={<Home />} />
          <Route path={reactRoute.page.auth.signup} element={<SignUp />} />
          <Route path={reactRoute.page.auth.signin} element={<SignIn />} />
        </Routes>
      </Layout>
    </Router>


  );
}

export default App;
