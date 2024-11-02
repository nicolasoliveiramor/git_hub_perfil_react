// Importoando arquivo CSS

import styles from './Perfil.module.css'

// Criando uma arrow function para exportar o componente Perfil
/*const Perfil = () => {
    const usuario = {
        nome: 'Nicolas',
        avatar: 'https://github.com/nicolasoliveiramor.png'
    }
    
    return (
        <div>
            <img className='perfil-avatar' src={usuario.avatar} />
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    )
}

// exportando componente Perfil
export default Perfil;


// Exportando componente diretamente com function tradicional
export default function Perfil() { 
    const usuario = {
        nome: 'Nicolas',
        avatar: 'https://github.com/nicolasoliveiramor.png'
    };
    
    return (
        <div>
            <img className='perfil-avatar' src={usuario.avatar} alt="Avatar do usuário" />
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    );
}*/


// Exportando componente com 'arrow function'
/*const Perfil = () => {
    const usuario = {
        nome: 'Nicolas',
        avatar: 'https://github.com/nicolasoliveiramor.png'
    }

    return (
        <div>
            <img className='perfil-avatar' src={usuario.avatar} alt="Avatar do usuário" />
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    )
}

export default Perfil*/


const Perfil = ({ nomeDoUsuario }) => {
    
    fetch()

    return (
        <header className={styles.header}>
            <img className={styles.avatar} alt="Avatar do usuário" src='https://github.com/nicolasoliveiramor.png'/>
            <h3 className={styles.name}>{nomeDoUsuario}</h3>
        </header>
    )
}

export default Perfil