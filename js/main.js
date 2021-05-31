/*----- constants -----*/
const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);

let game () {  
constructor() {
      this.turn = "X";
      this.board = new Array(9).fill(null);
  }

  nextTurn() {
      this.turn = this.turn === "X" ? "O" : "X"; 
      console.log(game.turn);
      console.log(game.turn);
  }
}
/*----- app's state (variables) -----*/


/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/


