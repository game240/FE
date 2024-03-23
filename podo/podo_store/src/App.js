import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import './App.css';
import mainSampleImg from './assets/image/mainsampleimg.png';
import instagram_Img from './assets/image/instagram.png';
import youtube_Img from './assets/image/youtube.png';
import x_Img from './assets/image/x.png';
import MainNav from './Pages/MainNav';

function App() {
  return (
    <div className="App">
      <MainNav />
      <div className="main_body">
        <img src={mainSampleImg} alt="Main Img"></img>
      </div>
      <div className="main_footer">
        <div className="social_link_text">
          SOCIAL LINK
          <a href="https://www.instagram.com" target="_blank">
            <img src={instagram_Img} alt="Instagram"></img>
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src={youtube_Img} alt="Youtube"></img>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img src={x_Img} alt="X"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
