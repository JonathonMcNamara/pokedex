export class WildPokemon {
    constructor({name,url}){
        this.name = name
        this.url = url
    }
    
    get Template(){
        return `
        <div class="selectable no-select p-2 text-white rounded" onclick="app.wildPokemonController.setActive()" >
        <p><b>${this.name}</b></p>
        </div>
        `
    }
}
