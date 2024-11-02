import { useState, useEffect } from "react"

const Formulario = () => {
    // Estado para armazenar notas e nome do usuário
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    // 'Montando' o componente ao iniciar e 'desmontando' ao finalizar com useEffect
    useEffect(() => {
        console.log('O componente iniciou!') // Executado na montagem

        return () => {
            console.log('O componente finalizou.') // Executado na desmontagem
        }
    }, [])

    useEffect(() => {
        console.log('o estado nome mudou')
    }, [nome])

    useEffect(() => {
        console.log(`As matéria A mudou para: ${materiaA}`)
        console.log(`As matéria B mudou para: ${materiaB}`)
        console.log(`As matéria C mudou para: ${materiaC}`)
    }, [materiaA, materiaB, materiaC])

    // Função que atualiza o nome do usuário no estado e imprime o nome anterior no console
    const renderizaNome = (evento) => {
        // Atualiza o estado 'nome' e imprime o estado anterior (imutabilidade)
        setNome(estadoAnterior => {
            // console.log(estadoAnterior) Imprime o nome anterior

            return evento.target.value // Retorna o novo valor do input
        })
    }

    // Função para calcular a média das notas e retornar o resultado
    const renderizaResultado = () => {
        let soma = parseInt(materiaA) + parseInt(materiaB) + parseInt(materiaC) // Soma das notas
        let media = soma / 3 // Cálculo da média

        // Condições para exibir mensagens com base na média
        if (media === 0) {
            return (
                <p>Digite as suas notas.</p> // Mensagem se nenhuma nota foi inserida
            )
        } else if (media >= 7) {
            return (
                <p>Olá {nome} você foi aprovado! {media.toFixed(1)}</p> // Mensagem de aprovação
            )
        } else {
            return (
                <p>Olá {nome} você foi reprovado! {media.toFixed(1)}</p> // Mensagem de reprovação
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={renderizaNome} />
            {/* Atualiza a nota da matéria A utilizando desestruturação para acessar o valor do input */}
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(target.value)} />
            <input type="number" placeholder="Nota matéria B" onChange={({ target }) => setMateriaB(target.value)} />
            <input type="number" placeholder="Nota matéria C" onChange={({ target }) => setMateriaC(target.value)} />
            {/* Renderiza o resultado com base nas notas */}
            {renderizaResultado()}
        </form>
    )
}

export default Formulario