import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function Routing() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
