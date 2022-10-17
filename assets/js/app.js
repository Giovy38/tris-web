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

const changeSymbol = async () => {

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
const callZeroSymbol = async () => {
    await addSymbol('zero');
    await changeSymbol();
}
zero.addEventListener('click', callZeroSymbol);



// one
const one = document.getElementById('one');
const callOneSymbol = async () =>{
    await addSymbol('one');
    await changeSymbol();
} 
one.addEventListener('click', callOneSymbol);

// two
const two = document.getElementById('two');
const callTwoSymbol = async ()  => {
     await addSymbol('two');
     await changeSymbol();
}
two.addEventListener('click', callTwoSymbol);

// three
const three = document.getElementById('three');
const callThreeSymbol = async () => {
    await addSymbol('three');
    await changeSymbol();
}
three.addEventListener('click', callThreeSymbol);

// four
const four = document.getElementById('four');
const callFourSymbol = async () => {
    await addSymbol('four');
    await changeSymbol();
}
four.addEventListener('click', callFourSymbol);

// five
const five = document.getElementById('five');
const callFiveSymbol = async () => {
    await addSymbol('five');
    await changeSymbol();
}
five.addEventListener('click', callFiveSymbol);

// six
const six = document.getElementById('six');
const callSixSymbol = async () => {
    await addSymbol('six');
    await changeSymbol();
}
six.addEventListener('click', callSixSymbol);

// seven
const seven = document.getElementById('seven');
const callSevenSymbol = async () => {
    await addSymbol('seven');
    await changeSymbol();
}
seven.addEventListener('click', callSevenSymbol);

// eight
const eight = document.getElementById('eight');
const callEightSymbol = async () => {
    await addSymbol('eight');
    await changeSymbol();
}
eight.addEventListener('click', callEightSymbol);

