// select the container div
const trisContainer = document.getElementById('tris-container');
// select the button 
const replayButton = document.getElementById('replay-button');

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
}

// replay button 
replayButton.addEventListener('click',replayGame);

function replayGame(){
    const symbolArray = Array.from(document.getElementsByClassName('symbol'));

    symbolArray.forEach(element => {
        element.classList.add('trasparent');
        element.textContent = 'X';
    })
}

