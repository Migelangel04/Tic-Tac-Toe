const gameboard = (function () {
    let arrayGameBoard = ["M", "I", "G", "U", "E", "L", "L", "O", "L"];

    const setBoxValue = (index, sign) => {
        if (index >= arrayGameBoard.length) return;
        arrayGameBoard[index] = sign;
    }

    const getBoxValue = (index) => {
        return arrayGameBoard[index];
    }

    const resetBoard = () => {
        arrayGameBoard = arrayGameBoard.map((box) => box = "");
    }

    return {setBoxValue, getBoxValue, resetBoard};
})();

const player = (symbol) => {
    this.symbol = symbol;

    const getPlayerSymbol = () =>{
        return this.symbol;
    } 

    return {getPlayerSymbol};
};



