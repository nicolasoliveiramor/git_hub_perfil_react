import { useState } from "react";

// Importando os componentes
import Perfil from "./components/Perfil/Index";
import Formulario from "./components/Formulario/Index";
import ReposList from "./components/ReposList/Index";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeDoUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <div className="buscar-nome-user">
        <label htmlFor="buscarNomeUser">Buscar Usuario: </label>
        <input
          id="buscarNomeUser"
          type="text"
          onBlur={(e) => setNomeUsuario(e.target.value)}
        />
      </div>

      {nomeDoUsuario.length > 1 && (
        <>
          {/* Exibindo perfil e lista de repositórios quando nomeDoUsuario está definido */}
          <Perfil usuario={nomeDoUsuario} endereco={`https://github.com/${nomeDoUsuario}.png`} />
          <ReposList usuario={nomeDoUsuario} />
        </>
      )}
    </>
  );
}

export default App;
