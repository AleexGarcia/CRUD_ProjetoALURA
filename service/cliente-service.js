
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

 const listaClientes = async () =>{
    const resposta = await fetch('http://localhost:3000/profile')
     return await resposta.json()
}

const criaCliente = async (nome,email) =>{
    
    const resposta = await fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
        })
    })
    return resposta.body
}


const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE'
    })
}

const detalhaCliente = async (id) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`)
    return await resposta.json()
}

const atualizaCliente = async (nome, email, id) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    return await resposta.json()
}

export const clienteService = {
    listaClientes, 
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
};