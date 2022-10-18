// select the container div
const trisContainer = document.getElementById('tris-container');
// select the button 
const replayButton = document.getElementById('replay-button');
// select victory form 
const victoryForm = document.getElementById('victory-container');
// declare winner symbol
let winnerSymbol;
let isWin =false;

// change the symbol function
const changeSymbol = () => {

    const symbolArray = Array.from(document.getElementsByClassName('trasparent'));
    symbolArray.forEach(element => {
        if(element.textContent === 'X'){
            element.textContent = 'O'
        } else{
            element.textContent = 'X'
        }
    });

    // console.log(symbolArray);
}

// add the click event 
trisContainer.addEventListener('click', onClick);

function onClick(e){
    const selected = e.target;
    selected.classList.remove('trasparent');
    changeSymbol();
    victoryControl();
}

// replay button 
replayButton.addEventListener('click',replayGame);

function replayGame(){
    const symbolArray = Array.from(document.getElementsByClassName('symbol'));

    symbolArray.forEach(element => {
        element.classList.add('trasparent');
        element.textContent = 'X';
    })
    isWin = false;
    victoryForm.classList.add('hidden');
}

// victory function 
function victoryControl(){
    const symbolArray = Array.from(document.getElementsByClassName('symbol'));
// controllo orizzontale
// 012 
// 345 
// 678 

    for (let index = 0; index < symbolArray.length; index+= 3) {
        for (let j = 0; j < 1; j++) {
            if (symbolArray[index].innerHTML === symbolArray[index+1].innerHTML && symbolArray[index].innerHTML === symbolArray[index+2].innerHTML && !symbolArray[index].classList.contains('trasparent')  && !symbolArray[index+1].classList.contains('trasparent')  && !symbolArray[index+2].classList.contains('trasparent') ) {
                winnerSymbol = symbolArray[index].innerHTML
                isWin = true;
            }
            
        }
    }

    if(isWin){
        victoryForm.classList.remove('hidden');
        const symbolVictory = document.getElementById('victory-symbol');
        symbolVictory.innerHTML = `${winnerSymbol}`

    }
}
