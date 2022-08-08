import { ProxyState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"
import { WildPokemon } from "../Models/WildPokemon.js"

class WildPokemonService {

async getPokemon(){
    let res = await pokeApi.get('/v2/pokemon')
    ProxyState.wildPokemon = res.data.results.map(p => new WildPokemon(p))
}


}



export const wildPokemonService = new WildPokemonService()
