import './App.css';
import Header from "./Header/Header";
const urlApp = "https://jhordanlossehelin.vercel.app";
const urlSociais = "https://jhordanlossehelin.vercel.app/seguir";
const urlGithub = "https://github.com/jhoOrdann";


function App() {
  return (
    <div>
      <Header />

      <h1>Calmae paizão!</h1>
      <p>Esta aplicação REACT.JS foi desenvolvida com a Imersão Alura</p>
      <p>Feito por <a href={urlApp}>Jhordan Lossehelin</a></p>

      <h2>Siga-me</h2>
      <p>
        <a href={urlApp}>Site pessoal</a><br />
        <a href={urlSociais}>Redes Sociais</a><br />
        <a href={urlGithub}>Github</a>
      </p>
    </div>
  );
}

export default App;
