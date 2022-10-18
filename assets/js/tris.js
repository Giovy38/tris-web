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
}

// draw control 
const drawControl = () => {
    const draw = document.getElementsByClassName('trasparent');
    // console.log(draw);
    const drawArray = Array.from(draw);
    if(drawArray.length === 0){
        victoryForm.classList.remove('hidden');
        const symbolVictory = document.getElementById('victory-symbol');
        symbolVictory.innerHTML = `DRAW`

        const congrat = document.getElementById('congrat');
        congrat.innerHTML = `Sorry this time is a`;

        const playerText = document.getElementById('player');
        playerText.classList.add('hidden');
    }
}

// add the click event 
trisContainer.addEventListener('click', onClick);

function onClick(e){
    const selected = e.target;
    if(e.target.classList.contains('trasparent')){
        selected.classList.remove('trasparent');
        changeSymbol();
    }
    victoryControl();
    drawControl()
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

    const congrat = document.getElementById('congrat');
    congrat.innerHTML = `congratulation the Winner is`;

    const playerText = document.getElementById('player');
    playerText.classList.remove('hidden');
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

// controllo verticale
// 036 
// 147
// 258

    for (let index = 0; index < 3; index++) {
        for (let j = 0; j < 1; j++) {
            if (symbolArray[index].innerHTML === symbolArray[index+3].innerHTML && symbolArray[index].innerHTML === symbolArray[index+6].innerHTML && !symbolArray[index].classList.contains('trasparent')  && !symbolArray[index+3].classList.contains('trasparent')  && !symbolArray[index+6].classList.contains('trasparent') ) {
                winnerSymbol = symbolArray[index].innerHTML
                isWin = true;
            }
        }
    }

// controllo orizontale
// 048
// 246
let tr = 4 //temporany index (048)

for (let index = 0; index < 1; index++) {
    for (let j = 0; j < 1; j++) {
        if (symbolArray[index].innerHTML === symbolArray[index+tr].innerHTML && symbolArray[index].innerHTML === symbolArray[index+tr+tr].innerHTML && !symbolArray[index].classList.contains('trasparent')  && !symbolArray[index+tr].classList.contains('trasparent')  && !symbolArray[index+tr+tr].classList.contains('trasparent') ) {
            winnerSymbol = symbolArray[index].innerHTML
            isWin = true;
        }
    }
}

tr = 2  //temporany index (246)

for (let index = 2; index < 3; index++) {
    for (let j = 0; j < 1; j++) {
        if (symbolArray[index].innerHTML === symbolArray[index+tr].innerHTML && symbolArray[index].innerHTML === symbolArray[index+tr+tr].innerHTML && !symbolArray[index].classList.contains('trasparent')  && !symbolArray[index+tr].classList.contains('trasparent')  && !symbolArray[index+tr+tr].classList.contains('trasparent') ) {
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




