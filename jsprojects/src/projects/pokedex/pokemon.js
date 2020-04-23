class Pokemon {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.sprite = data.sprites.front_default;
      this.type = data.types[0].type.name;
      this.exp = data.base_experience;
      this.weight = data.weight;
      this.ability1 = data.abilities[0].ability.name
      this.ability2 = data.abilities[1].ability.name
    }
  }
  
  export default Pokemon;