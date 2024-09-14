Biblioteca de Filósofos

Descrição:

Uma aplicação web intuitiva para pesquisar por filósofos em uma base de dados personalizada. Simplesmente digite o nome de um filósofo (ou parte dele) no campo de pesquisa e obtenha uma lista de resultados relevantes, incluindo nomes, descrições e links para mais informações.

Funcionalidades:

    Pesquisa Flexível: Realize buscas por partes do nome, palavras-chave na descrição ou tags associadas ao filósofo.
    Resultados em Tempo Real: A lista de resultados é atualizada instantaneamente conforme você digita.
    Interface Intuitiva: Navegue facilmente pela aplicação com uma interface simples e amigável.
    Links para Mais Informações: Descubra mais sobre cada filósofo através de links externos.

Estrutura dos Dados:

O arquivo dados.js contém um array de objetos, onde cada objeto representa um filósofo e possui as seguintes propriedades:

    nome: Nome completo do filósofo.
    descricao: Breve descrição do filósofo.
    tags: Palavras-chave associadas ao filósofo (separadas por vírgula).
    link: Link para uma página externa com mais informações.

Exemplo:
JavaScript

{
    nome: "Immanuel Kant",
    descricao: "Immanuel Kant foi um filósofo alemão do século XVIII, considerado um dos mais influentes da história da filosofia. Sua obra abrange diversas áreas, como            epistemologia, metafísica, ética e estética. Kant é conhecido por sua distinção entre o mundo fenomenal e o mundo noumênico, e por sua formulação do imperativo           categórico.",
    link: "https://pt.wikipedia.org/wiki/Immanuel_Kant",
    tags: "iluminismo criticismo críticas"
}

Tecnologias Utilizadas:

    HTML: Estrutura da página.
    CSS: Estilização da página.
    JavaScript: Lógica da aplicação.
    DOM: Manipulação do Document Object Model.
