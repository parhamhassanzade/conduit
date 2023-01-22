import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactRoute from "./routes/Routes";
import Home from "./pages/Home";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Editprofile from './pages/Auth/Editprofile';

function App() {
  return (
    <>
      <Provider store={store}>

        <ToastContainer rtl={true} hideProgressBar={true} />
        <Router>
          <Layout>
            <Routes>
              <Route path={reactRoute.home} element={<Home />} />
              <Route path={reactRoute.page.auth.signup} element={<SignUp />} />
              <Route path={reactRoute.page.auth.signin} element={<SignIn />} />
              <Route path={reactRoute.page.rditProfile} element={<Editprofile />} />
            </Routes>
          </Layout>
        </Router>
      </Provider>

    </>
  );
}

export default App;
