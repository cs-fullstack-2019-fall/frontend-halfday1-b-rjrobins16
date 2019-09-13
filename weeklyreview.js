
btn1 = document.getElementById("player1button");
btn2 = document.getElementById("player2button");
let player1 = document.getElementById("player1score");
let player2 = document.getElementById("player2score");
let winner = document.getElementById("playerinthelead");



function counter() {
    if (parseInt(player1.innerText) > parseInt(player2.innerText)){
        winner.innerText = "Player 1";
    }
    if (parseInt(player1.innerText) === parseInt(player2.innerText)){
        winner.innerText = "TIED!"

    }
    else if (parseInt(player1.innerText) < parseInt(player2.innerText)){
        winner.innerText = "Player 2"
    }


}

function newgame(){
    if (parseInt(player1.innerText) === 15){
        alert("PLAYER 1 WINS!");
        player2.innerText = "0";
        player1.innerText = "0";
        winner.innerText = "..."

    }

    else if (parseInt(player2.innerText) === 15){
        alert("PLAYER 2 WINS!");
        player2.innerText = "0";
        player1.innerText = "0";
        winner.innerText = "..."

    }
}

btn1.addEventListener("click",function () {
    player1.innerText= parseInt(player1.innerText) + 1;
    counter();
    newgame();

});

btn2.addEventListener("click",function () {
    player2.innerText = parseInt(player2.innerText) +1;
    counter();
    newgame();
});



