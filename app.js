const game ={
Title:"Guess the Number",
biggestNum: 100,
smallestNum:1,
secretNum: 1,
guessesByplayer: null,
prevGuesses: [],

play:function(){
this.secretNum = Math.floor(Math.random()*(this.biggestNum - this.smallestNum + 1))+this.smallestNum
console.log(this.secretNum)
let holder 

while(this.guessesByplayer !== this.secretNum){
  holder = game.getGuesses()
  this.prevGuesses.push(holder)
  game.render(this.secretNum)
}
},
getGuesses: function(){  
  
    this.guessesByplayer = (parseInt(prompt("guess a number between 1 and 100"),console.log(this.guessesByplayer)))
    return this.guessesByplayer
  
},
render: function(secret){
    if(this.guessesByplayer === secret){
          alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses`)
        }
            
          else if (this.guessesByplayer > secret){
            alert(` Your guess was too high. Previous guesses: ${this.prevGuesses.join('\n')}`)
          }
            
          else if(this.guessesByplayer < secret){
                alert(`Your guess was too low. Previous guesses: ${this.prevGuesses.join('\n')}`)
              }
}
}
game.play()
