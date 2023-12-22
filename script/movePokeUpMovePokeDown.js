function movePokemonUp(pokemon, list) {
    const index = list.indexOf(pokemon);
    if (index > 0) {
      const temp = list[index];
      list[index] = list[index - 1];
      list[index - 1] = temp;
    }
  }
  function movePokemonDown(pokemon, list) {
    const index = list.indexOf(pokemon);
    if (index < list.length - 1) {
      const temp = list[index];
      list[index] = list[index + 1];
      list[index + 1] = temp;
    }
  }
  export { movePokemonUp, movePokemonDown };


  