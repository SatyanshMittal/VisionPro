import { useState } from 'react';
import { HelloProject_backend } from 'declarations/HelloProject_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    HelloProject_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main c>
        {/* <img src="/logo2.svg" alt="DFINITY logo" />
        <br />
        <br />
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor="name">Enterd your name: &nbsp;</label>
          <input id="name" alt="Name" type="text" />
          <button type="submit">ClickMe!</button>
        </form>
        <section id="greeting">{greeting}</section> */}
        
          <h1>ARCher's Assemble</h1>
          <img src="https://m.media-amazon.com/images/M/MV5BMjBlMTRjODMtMDMyYi00OGQ1LWJhNzYtYTYyMTcxOWI5MGM0XkEyXkFqcGdeQW1yb2Njbw@@._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="" />
        
    </main>
  );
}

export default App; 
