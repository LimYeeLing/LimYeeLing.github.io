//Task to be done to get the tic tak toe:
//1) Select the board
//2) Add Event Listener
//3)Click On Squar and fill it in
//4)






// //Answer 1:
// const board = document.getElementById('board')
// let boxes = document.querySelectorAll('.box')
// let turn = 0


// board.addEventListener('click', function (event) {
//     event.target.innerHTML = 'X '
// })

// boxes.forEach(function (box) {
//     box.onclick = function (event) {
//         if (turn % 2 == 0) {
//             event.target.innerHTML = 'X'
//         } else {
//             event.target.innerHTML = 'O'
//         }
//     }
// })


// Answer 2:
let boxes = document.querySelectorAll(".box")
let player = "X";
let round = 0

function changePlayer() {
    if (player == "X") {
        player = "O";
    } else {
        player = "X"
    }
}

boxes.forEach(function (box) {
    box.onclick = function (event) {
        if (event.target.innerHTML == '') {
            event.target.innerHTML = player;
            round++
            if (checkWin()) {
                alert("Congratulation!You Won!!!")
            } else if (checkWin() == false && round == 9) {
                alert("Draw")
            }
            else {
                changePlayer()
            }
        }
        else {
            alert('The space already filled')
        }
    }
})


let winningCombos = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]


function checkWin() {
    let winner = false
    winningCombos.forEach(function (element) {
        // console.log(boxes[element[0]].innerHTML);
        //Element=[0,1,2]
        if (boxes[element[0]].innerHTML == player && boxes[element[1]].innerHTML == player && boxes[element[2]].innerHTML == player) {
            winner = true


        }

    });

    return winner

}
