var dataStore = new MarvelService()


dataStore.getCharacters(ready)

function ready(data){
  
  update(data, '#marvel-characters')
  
  $('#marvel-characters').on('click', '.btn-success', function(){
      debugger
    //this function will take the player that was clicked and add them to your team through the dataStore.
      dataStore.addToMyCharacters(this.id)
      update(dataStore.getMarvelCharacters(), `#marvel-characters`)
      update (dataStore.getMyCharacters(), `#my-characters`)
      console.log(dataStore.myCharacters)
  })
  
  $('#my-characters').on('click', '.btn-danger', function(){
      debugger
    //this will remove the character from your team
    dataStore.removeMyCharacter(this.id)
    update(dataStore.getMyCharacters(), '#my-characters')
  })
  
  
  function update(list, target){
    //target is the id of the element where the list will be rendered
    var elem = $(target)
    elem.empty()
     
    for (var i in list) {
      console.log(list)
      var character = list[i];
      console.log(character);
      var marvelTemplate = `
      <div class="card">
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
        <h3>${character.name}</h3>
        <div>
          <button class="btn-success" id="${character.id}">Add to Team</button>
        </div>
      <div>
      `
      var myTemplate = `
      <div class="card">
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
        <h3>${character.name}</h3>
        <div>
          <button class="btn-danger" id="${character.id}">DESTROY FOREVER</button>
        </div>
      <div>
      `
      
      elem.append(target == '#marvel-characters' ? marvelTemplate : myTemplate)
    }
    
  }
  
}