import './App.css';
import { Header } from './components/header/header';
import { Hero } from './components/characters/hero-block/hero-block';
import { Main } from './components/characters/main/main';
import { Footer } from './components/footer/footer';
import { Characters } from './components/characters/characters';
import { Comics } from './components/comics/comics';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Characters></Characters>
        <Comics></Comics>
        <Footer></Footer>
    </div>
  );
}

export default App;
