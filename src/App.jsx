import React from "react";

const App = () => {
  const name = "Thevindu";
  let x = 10;
  let y = 20;
  const names = ["Brad", "Mary", "Joe", "Sara"];
  const loggedIn = false;
  const styles = {
    color: "red",
    fontSize: "55px",
  };

  return (
    <>
      <div className="text-5xl">App</div>
      <p style={styles}>Hello {name}</p>
      <p>
        Sum of {x} and {y} = {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn && <h1>Hello Member</h1>}
    </>
  );
};

export default App;
