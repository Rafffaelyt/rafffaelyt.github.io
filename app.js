function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    const inputPesquisa = document.getElementById("campo-pesquisa");
    
    const termoPesquisa = inputPesquisa.value.toLowerCase();
    const resultadosFiltrados = dados.filter(dado => dado.nome.toLowerCase().includes(termoPesquisa));
    let resultados = "";
    resultadosFiltrados.forEach(dado => {
    resultados += `
        <div class="${dado.resultado}">
            <img src="${dado.img}" alt="Frisk" class="${dado.classimg}">
            <h2>
                <a href="${dado.linkInformacoesCompletas}" target="_blank">${dado.nome}</a>
            <h2>
            <p class="descricao-meta">${dado.descricao}</p>
        </div>
        ` ;
    });

    //atualizar o conteudo da seção HTML com os resultados construídos
    section.innerHTML = resultados;
}