import logo from './logo.svg';
import mas from "./images/master.webp";
import aud from "./audio/birds.wav";
import vid from "./video/5mbfile.mp4";
import './App.css';

function App() {
  return (
    <div className="App">

      <h1>JSXML RULES</h1>
      <h2> MEDIA</h2>

      <h3>images</h3>


      <img className="poster" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSq7jyUEq7yJ2H1jdTpfWgKVjxlpekjLuIQGDuG6VoIFZWeNusbfj9neiuEdAZU_sZ-k&usqp=CAU"></img>

      <img className="poster" src="./images/tigres.jpeg"></img>

      <img className="poster" src={mas}></img>

      <hr></hr>
      <h3>audio</h3>
      <audio src="https://services.brninfotech.com/tws/media2/songs/Mallesham/02 - Naaku Nuvvani.mp3" controls ></audio>
      <audio src="./audio/cheer.wav" controls ></audio>
      <audio src={aud} controls  ></audio>
      
      <hr></hr>

      <h3>video</h3>

      <video className="poster" src="https://services.brninfotech.com/tws/media2/trailers/Mallesham.mp4" controls muted autoplay ></video>

      <video  className="poster" src="./video/sample 3mb.mp4" controls autoplay></video>

      <video className="poster" src={vid} controls  muted autoplay ></video>
      <hr></hr>
      
    </div>
  );
}

export default App;
