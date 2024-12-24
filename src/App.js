import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        console.log("::entry in frame ", entry);
        entry.target.style.backgroundColor = "red";
      });
    }, {});
    const target = document.getElementById("observerEx");
    observer.observe(target);
  }, []);

  return (
    <div className="App">
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box" id="observerEx">
        3
      </div>
      <div className="box">4</div>
      <div className="box">5</div>
    </div>
  );
}

export default App;
