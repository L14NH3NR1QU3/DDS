const TemplateExpressions = () => {
    let nome = "Messi";

    let aluno = {
        nome: "Cristiano",
        turma: "Futbolistas",
        professor: "Messi",
        curso: "Futboll"
    }

    return (
        <>
            <h3>O nome do melhor do mundo é: {nome}!</h3>
            <p>O aluno {aluno.nome}, faz o curso de {aluno.curso}, na turma {aluno.turma} com o professor {aluno.professor}.</p>
        </>
    )

}

export default TemplateExpressions