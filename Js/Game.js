class Game
{
    constructor()
    {

    }


    play()
    {

    }

    update(state)
    {
      database.ref("/").update({"gameState": state})
    }

    getState()
    {
      var dbref = database.ref("gameState")
      dbref.on("value",(data) =>
      {
         gameState = data.val()
      })
    }
   
   startGame()
   {
     if(gameState === 0)
     {
         form = new Form()
         player = new Player()
         form.display()
         player.getCount()
     }
   }

    
}


