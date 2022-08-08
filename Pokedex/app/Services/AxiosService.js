export const pokeApi = new axios.create({
    baseURL: 'https://pokeapi.co/api',
    timeout: 8000
})


export const sandboxApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/jon',
    timeout: 8000
})


