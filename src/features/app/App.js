import Memes from '../memes/Memes'
function App() {
  return (
    <div className="App">
      <h5>MEMESITE</h5>
      <h2>Less Talking - Download Your Desired Meme </h2>
       <Memes url="https://api.imgflip.com/get_memes"/> 
    </div>
  );
}

export default App;
  