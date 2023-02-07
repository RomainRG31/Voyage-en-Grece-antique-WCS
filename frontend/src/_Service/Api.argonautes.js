
// fonction récuperation de tous les logements.
let GetAllUser = async () => {

    const response = await fetch('http://localhost:3000/argonautes');
    const data = await response.json();
    return data;
}

let CreateUser = (data) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    };

    return fetch('http://localhost:3000/argonautes', requestOptions)
        .then(response => response.json())
        .then(data => {
            return data;
        });



}

// export des fonctions pour les réutiliser dans les pages.
export const ApiService = {
    GetAllUser,
    CreateUser
}


export default ApiService