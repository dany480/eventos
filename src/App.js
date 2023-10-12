
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import CadastroEvento from './pages/CadastroEvento';
import Home from './pages/Home';
import ListaEventos from './pages/ListaEventos';
import DetalhesEvento from './pages/DetalhesEvento';
import AlteracaoEvento from './pages/AlteracaoEventos';


function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route exact path="/" element ={<Home />} />
          <Route exact path="/cadastro" element= {<CadastroEvento />}/>
          <Route exact path="/lista" element= {<ListaEventos />}/>
          <Route exact path="/detalhes/:id" element= {<DetalhesEvento />}/>
          <Route exact path="/alteracao/:id" element= {<AlteracaoEvento />}/>
        </Routes>
      </main>

      <Footer />
    </div>
  );

}

export default App;
