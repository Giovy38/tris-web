class Symbol{
    constructor(value){
        this.value = value;
    }
}
// add symbol function
const addSymbol = async (id) => {
    const symboltras = await document.getElementById(`${id}-h1`);
    await symboltras.classList.remove('trasparent')
};

// zero 
const zero = document.getElementById('zero');
const callZeroSymbol = () => addSymbol('zero');
zero.addEventListener('click', callZeroSymbol);


// one
const one = document.getElementById('one');
const callOneSymbol = () => addSymbol('one');
one.addEventListener('click', callOneSymbol);
// two
const two = document.getElementById('two');
const callTwoSymbol = () => addSymbol('two');
two.addEventListener('click', callTwoSymbol);
// three
const three = document.getElementById('three');
const callThreeSymbol = () => addSymbol('three');
three.addEventListener('click', callThreeSymbol);
// four
const four = document.getElementById('four');
const callFourSymbol = () => addSymbol('four');
four.addEventListener('click', callFourSymbol);
// five
const five = document.getElementById('five');
const callFiveSymbol = () => addSymbol('five');
five.addEventListener('click', callFiveSymbol);
// six
const six = document.getElementById('six');
const callSixSymbol = () => addSymbol('six');
six.addEventListener('click', callSixSymbol);
// seven
const seven = document.getElementById('seven');
const callSevenSymbol = () => addSymbol('seven');
seven.addEventListener('click', callSevenSymbol);
// eight
const eight = document.getElementById('eight');
const callEightSymbol = () => addSymbol('eight');
eight.addEventListener('click', callEightSymbol);

