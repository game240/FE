import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import StoreMain from './Pages/StoreMain';
import NowPlaying from './Pages/NowPlaying';
import ScriptRegist from './Pages/ScriptRegist';
import ApplyScript from './Pages/ApplyScript';
import MonthAuthor from './Pages/MonthAuthor';

function Routing() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/storemain" element={<StoreMain />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="/scriptregist" element={<ScriptRegist />} />
          <Route path="/applyscript" element={<ApplyScript />} />
          <Route path="/monthauthor" element={<MonthAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
