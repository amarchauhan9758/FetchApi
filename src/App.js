import logo from './logo.svg';
import './App.css';

import Nabvar from './components/Nabvar';
import Newsitem from './components/Newsitem';
import News from './components/News';

function App() {
  return (
    <div className="App bg-slate-200">
    <Nabvar/>
     <News/>
     {/* <Newsitem/> */}
    </div>
  );
}

export default App;
