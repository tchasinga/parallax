import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function App() {
  return (
    <>
      <Parallax pages={4}>

      <ParallaxLayer  >
      <div className="codeOne">
        <h1>New is added now</h1>
      </div>
      </ParallaxLayer>

      <ParallaxLayer >
      <div className="codeOne second">
        <h1>Get new Main point</h1>
      </div>
      </ParallaxLayer>

     <ParallaxLayer  >
     <div className="codeOne three">
        <h1>Post request is added</h1>
      </div>
     </ParallaxLayer>

      <ParallaxLayer  >
      <div className="codeOne last">
        <h1>Great main musics</h1>
      </div>
      </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
