import { clienteService } from "../service/cliente-service.js";

const tabela = document.querySelector('[data-tabela]');
const criaNovaLinha = (nome, email, id) => {

    let linha = document.createElement("tr");
    let template = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td> 
    `
    linha.dataset.id = id;
    linha.innerHTML = template;

    return linha;
};

clienteService.listaClientes().then(data => {

    data.forEach(dado => {
        tabela.appendChild(criaNovaLinha(dado.nome, dado.email, dado.id));
    });

});


tabela.addEventListener('click', async e => {
    let botaoDeletar = e.target.className === 'botao-simples botao-simples--excluir';
    if (botaoDeletar) {
        const linhaCliente = e.target.closest('[data-id]');
        let id = linhaCliente.dataset.id;
        await clienteService.removeCliente(id)
        linhaCliente.remove();

    }
})