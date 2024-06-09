import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);

  const handleNameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setEmailAddress(e.target.value);

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <div>
        <form htmlFor="user-name">
          <label htmlFor="user-name">User Name: </label>
          <input
            type="text"
            id="user-name"
            placeholder="User Name"
            value={userName}
            onChange={handleNameChange}
          />
          <label htmlFor="email-address">Email Address: </label>
          <input
            type="text"
            id="email-address"
            placeholder="Email Address"
            value={emailAddress}
            onChange={handleEmailChange}
          />
          <input type="checkbox" id="interest-one" checked={checkedOne} />
          <label htmlFor="interest-one">Interest One</label>
          <input type="checkbox" id="interest-two" checked={checkedTwo} />
          <label htmlFor="interest-two">Interest Two</label>
          <input type="checkbox" id="interest-three" checked={checkedThree} />
          <label htmlFor="interest-three">Interest Three</label>
        </form>
      </div>
    </main>
  );
}

export default App;
