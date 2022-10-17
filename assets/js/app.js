class Symbol{
    constructor(){
        this.symbol = 'X';
    }

    changeSymbol(newSymbol){
        if(this.symbol === 'X'){
            newSymbol = 'O'
        }else{
            newSymbol = 'X'
        }
        console.log(this.symbol);
        return newSymbol;
    }
}

document.getElementById('zero').addEventListener('click',insertValue);
document.getElementById('one').addEventListener('click',insertValue);
document.getElementById('two').addEventListener('click',insertValue);
document.getElementById('three').addEventListener('click',insertValue);
document.getElementById('four').addEventListener('click',insertValue);
document.getElementById('five').addEventListener('click',insertValue);
document.getElementById('six').addEventListener('click',insertValue);
document.getElementById('seven').addEventListener('click',insertValue);
document.getElementById('eight').addEventListener('click',insertValue);

function insertValue(){
    const symbol = new Symbol();
    

    document.querySelectorAll('.symbol').forEach(symbol => {
        const reachSymbol = symbol.textContent;
        symbol.changeSymbol(reachSymbol);
        console.log('foreach:0',symbol.textContent);
        console.log('this',this.symbol);
    })

   
}