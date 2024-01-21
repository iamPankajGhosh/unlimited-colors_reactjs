import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isChanging) {
      intervalId = setInterval(() => {
        let randomColor = "#";
        let colorCode = "0123456789abcdefABCDEF";

        for (let i = 0; i < 6; i++) {
          randomColor += colorCode[Math.floor(Math.random() * 16)];
        }

        document.body.style.backgroundColor = randomColor;
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isChanging]);

  return (
    <>
      <div className="container">
        <h1>Unlimited Colors</h1>
        <div className="btns">
          <button
            className="btn"
            id="start"
            onClick={() => setIsChanging(true)}
          >
            Start
          </button>
          <button
            className="btn"
            id="stop"
            onClick={() => setIsChanging(false)}
          >
            Stop
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
