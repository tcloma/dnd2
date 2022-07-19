import './App.css'
import { useState } from 'react'
import MainMenu from './Components/MainMenu';
import CreateACharacter from './Components/CreateACharacter';

function App() {
const [screen, setScreen] = useState('main')

    return (
      <div>
        {
          screen === 'main' ? <MainMenu setScreen={setScreen}/>
          : <CreateACharacter />
        }
      </div>
    );
  }

export default App;
    // {
    //   screen === 'main' ? <MainMenu setScreen={setScreen}/>
    //   : <CreateACharacter />
    // }