export function getAllRecipes() {
    return fetch(`https://6481bf9329fa1c5c5031fa88.mockapi.io/api/v1/recipes`)
        .then(resp => resp.json())
        .catch(error => error.message)

};