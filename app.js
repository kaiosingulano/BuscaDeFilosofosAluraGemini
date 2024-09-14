function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Não foi enviado prompt de busca.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2><a href="https://www.youtube.com/watch?v=Ux5cQbO_ybw" target="_blank">${dado.nome}</a></h2>
                    <p>${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais Informações</a>
                </div>
            `
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }

    section.innerHTML = resultados
}



