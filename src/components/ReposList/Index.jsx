import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

// Definindo o componente 'ReposList'
const ReposList = ({ usuario }) => {
    // Criando estados para armazenar os repositórios e indicar o status de carregamento
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    // Hook useEffect para buscar os dados da API apenas quando o componente é montado
    useEffect(() => {
        fetch(`https://api.github.com/users/${usuario}/repos`)
            .then(res => res.json())  // Convertendo a resposta para JSON
            .then(resJson => {

                console.log(resJson)

                setEstaCarregando(true)
                
                // Utilizando setTimeout para simular um carregamento
                setTimeout(() => {
                    setEstaCarregando(false);  // Define 'estaCarregando' como false ao final do carregamento
                    setRepos(resJson);         // Armazena os dados recebidos da API no estado 'repos'
                }, 1000);  // Tempo de espera de 1 segundo
            })
    }, [usuario]);

    // Renderizando o componente
    return (
        <div className="container">
            {/* Condicional para exibir a mensagem "Carregando..." enquanto 'estaCarregando' é true */}
            {estaCarregando ? (
                <h2>Carregando...</h2>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}> {/* 'key' é importante para otimizar a renderização */}
                            <div className={styles.listItemName}>
                                <b>Nome: </b> {name} {/* Exibindo o nome do repositório */}
                            </div>
                            <div className={styles.listItemLanguage}>
                                <b>Linguagem: </b> {language} {/* Exibindo a linguagem usada */}
                            </div>
                            <a
                                className={styles.listItemLink}
                                target="_blank"
                                href={html_url}
                            >
                                Visitar no Github
                            </a>  {/* Link para o repositório */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ReposList; // Exportando o componente para ser utilizado em outros arquivos