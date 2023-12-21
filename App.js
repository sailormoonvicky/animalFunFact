import "./styles.css";
import {animals} from './animals.js'

export default function App() {

  let title = "Chick an animal for a SUPER fun fact";
  const defaultString = "Click an animal for a fun fact";

  const background = (
    <img
      className="background"
      alt="ocean"
      src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
  );

  const displayFact = (e) => {
    const animal = e.target.alt;
    let i = Math.floor(Math.random() * animals[animal].facts.length);
    let funFact = animals[animal].facts[i];
    document.getElementById("fact").innerHTML = funFact;
  };

  const images = [];

  for (const animal in animals) {
    images.push(
      <img
        key={animal}
        className="animal"
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role="button"
        onClick={displayFact}
      />
    );
  }

  const showBackground = true;

  const animalFacts = (
    <div>
      <h1>{title || defaultString}</h1>
      {showBackground && background}
      <p id="fact"></p>
      <div className="animals">{images}</div>
    </div>
  );
  return animalFacts;
  // return (
  //   <div className="App">
  //     <h1>Hello CodeSandbox</h1>
  //     <h2>Start editing to see some magic happen!</h2>
  //   </div>
  // );
}
