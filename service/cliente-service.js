const tabela = document.querySelector('[data-tabela]');
const criaNovaLinha = (nome, email) => {

    let linha = document.createElement("tr");
    let template = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td> 
    `

    linha.innerHTML = template;

    return linha;
};
// const listaClientes = () => {

//     const promise = new Promise((resolve, reject) =>{
//         const http = new XMLHttpRequest();
        
//         http.open('GET', 'http://localhost:3000/profile');
        
//         http.onload = () => {
            
//             if(http.status >= 400){
//                 reject(JSON.parse(http.response));
//             }else{
//                 resolve(JSON.parse(http.response));
//             }
                 
//         }

//         http.send();
//     })

//     return promise;
// };

const listaClientes = () =>{
    return fetch('http://localhost:3000/profile').then(resposta => resposta.json())
}



listaClientes().then(data => {
    
    data.forEach(dado => {
        tabela.appendChild(criaNovaLinha(dado.nome, dado.email));
    });

});


