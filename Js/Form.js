class Form
{

    constructor()
    {
      this.title = createElement("h1")
      this.name = createInput("Name")
      this.submit = createButton("Submit")
      this.greeting = createElement("h1")
      this.wait = createElement("h1")
    }

    
    display()
    {
      background(background_img)
      this.title.position(width/2,50)
      this.title.html("Keep Going!")

      this.name.position(width/2- 30, 180)

      this.submit.position(width/2 - 30, 220)
      textSize(30)
      fill("black")
      text("ALL THE BEST!", width/2 - 50, height/2 + 100)

      this.submit.mousePressed(() =>
      {
          this.name.hide()
          this.submit.hide()

          var name = this.name.value()
          this.greeting.html("Hello " + name)
          this.greeting.position(width/2 - 50, height/2- 230)
          
          this.wait.html("Wait for the other player to join")
          this.wait.position(30,5)

      })
      

    
    }
}