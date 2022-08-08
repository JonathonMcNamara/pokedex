import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { wildPokemonService } from "../Services/WildPokemonService.js";

function _drawPokemon(){
    let template = ''
    ProxyState.wildPokemon.forEach(p => template += p.Template)
    document.getElementById('wild-pokemon').innerHTML = template
}

export class WildPokemonController { 
    constructor(){
        ProxyState.on('wild-pokemon',_drawPokemon)
        this.getPokemon()
    }


    async getPokemon(){
        try {
        await wildPokemonService.getPokemon()  
        } catch (error) {
        console.error('[Getting Pokemon]', error)
        Pop.error(error)
            
        }
    }

}
