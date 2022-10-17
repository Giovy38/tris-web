class Symbol{
    constructor(value){
        this.value = value;
    }
}
// add symbol function
const addSymbol =  (id) => {
    const symboltras =  document.getElementById(`${id}-h1`);
    symboltras.classList.remove('trasparent')
};

const changeSymbol = () => {

    const symbolArray = Array.from(document.getElementsByClassName('trasparent'));
    symbolArray.forEach(element => {
        if(element.textContent === 'X'){
            element.textContent = 'O'
        } else{
            element.textContent = 'X'
        }
    });

    console.log(symbolArray);
}





// zero 
const zero = document.getElementById('zero');
const callZeroSymbol =  () => {
     addSymbol('zero');
     changeSymbol();
}
zero.addEventListener('click', callZeroSymbol);



// one
const one = document.getElementById('one');
const callOneSymbol =  () =>{
     addSymbol('one');
     changeSymbol();
} 
one.addEventListener('click', callOneSymbol);

// two
const two = document.getElementById('two');
const callTwoSymbol =  ()  => {
      addSymbol('two');
      changeSymbol();
}
two.addEventListener('click', callTwoSymbol);

// three
const three = document.getElementById('three');
const callThreeSymbol =  () => {
     addSymbol('three');
     changeSymbol();
}
three.addEventListener('click', callThreeSymbol);

// four
const four = document.getElementById('four');
const callFourSymbol =  () => {
     addSymbol('four');
     changeSymbol();
}
four.addEventListener('click', callFourSymbol);

// five
const five = document.getElementById('five');
const callFiveSymbol =  () => {
     addSymbol('five');
     changeSymbol();
}
five.addEventListener('click', callFiveSymbol);

// six
const six = document.getElementById('six');
const callSixSymbol =  () => {
     addSymbol('six');
     changeSymbol();
}
six.addEventListener('click', callSixSymbol);

// seven
const seven = document.getElementById('seven');
const callSevenSymbol =  () => {
     addSymbol('seven');
     changeSymbol();
}
seven.addEventListener('click', callSevenSymbol);

// eight
const eight = document.getElementById('eight');
const callEightSymbol =  () => {
     addSymbol('eight');
     changeSymbol();
}
eight.addEventListener('click', callEightSymbol);

