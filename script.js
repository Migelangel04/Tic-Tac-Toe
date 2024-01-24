
const gameboard = (function () {
        let arrayGameBoard = ["", "", "", "", "", "", "", "", ""];
    
        const setBoxValue = (index, sign) => {
            if (index >= arrayGameBoard.length) return;
            arrayGameBoard[index] = sign;
        }
    
        const getBoxValue = (index) => {
            return arrayGameBoard[index];
        }
    
        const resetBoard = () => {
            
            for (let i = 0; i < 9; i++)
            {
                arrayGameBoard[i] = "";
            }
        }
        return {setBoxValue, getBoxValue, resetBoard};
        
})();
    
const startPage = (function () {

    // Start Page Selectors and IDs
    const startPage = document.getElementById("startPage");
    const gamePage = document.getElementById("gamePage");

    const playerOneStartName = document.querySelector(".playerOneStartName");
    const playerOneBoxes = document.querySelectorAll('.playerOne');
    let playerOne = Player("batman", "media/batman.jpeg"); // Default Character Selection;
        
    const playerTwoStartName = document.querySelector(".playerTwoStartName");
    const playerTwoBoxes = document.querySelectorAll('.playerTwo');
    let playerTwo = Player("thor", "./media/thor.jpeg");

    const startGameButton = document.getElementById("startGameButton");

    playerOneBoxes.forEach((char) =>
    {
        char.addEventListener("click", (e) =>
        {
            let newName = e.target.id;
             if (newName === "batman")
             {
                setPlayerCharacter(0, newName, "./media/batman.jpeg");
             }
             else if (newName === "superman")
             {
                setPlayerCharacter(0, newName, "./media/superman.jpg");
             }
             else if (newName === "flash")
             {
                setPlayerCharacter(0, newName, "./media/flash.jpeg");
             }
             else if (newName === "wonderWomen")
             {
                setPlayerCharacter(0, newName, "./media/wonderWomen.jpeg");
             }
             playerOneStartName.textContent = newName.toUpperCase();
             // consoleLog(newName);
        })
    });

    playerTwoBoxes.forEach((char) =>
    {
        char.addEventListener("click", (e) =>
        {
            let newName = e.target.id;
             if (newName === "thor")
             {
                setPlayerCharacter(1, newName, "./media/thor.jpeg");
             }
             else if (newName === "hulk")
             {
                setPlayerCharacter(1, newName, "./media/hulk.jpeg");
             }
             else if (newName === "ironMan")
             {
                setPlayerCharacter(1, newName, "./media/ironMan.jpeg");
             }
             else if (newName === "captainMarvel")
             {
                setPlayerCharacter(1, newName, "./media/captainMarvel.jpeg");
             }
             playerTwoStartName.textContent = newName.toUpperCase();
             // consoleLog(newName);
        })
    });

    const setPlayerCharacter = (selectedPlayer, newName, newImage) =>
    {
        if (selectedPlayer === 0)
        {
            playerOne.setPlayerNameAndImage(newName, newImage);
        }
        else 
        {
            playerTwo.setPlayerNameAndImage(newName, newImage);
        }
    }

    startGameButton.addEventListener("click", () =>{
        startPage.classList.add("hidden");
        gamePage.classList.remove("hidden");
        document.querySelector('.playerOneScoreName').textContent = playerOne.getPlayerName().toUpperCase();
        document.querySelector('.playerTwoScoreName').textContent = playerTwo.getPlayerName().toUpperCase();
    })

    return {playerOne, playerTwo};
})();

const gamePage = (function (){
    const playerOneScore = document.querySelector(".playerOneScore");
    let playerOneLiveScore = 0;

    const playerTwoScore = document.querySelector(".playerTwoScore");
    let playerTwoLiveScore = 0;

    const liveGameBoard = document.querySelectorAll(".box");
    let playerOneTurn = true;
    let drawCheckCounter = 0;

    liveGameBoard.forEach((box) =>
    {
        box.addEventListener("click", (e) =>{
            if (e.target.classList.length > 1){
                return;
            }
            else{
                if (playerOneTurn)
                {
                    e.target.classList.add(startPage.playerOne.getPlayerName());
                    gameboard.setBoxValue(e.target.id, startPage.playerOne.getPlayerName());
                    drawCheckCounter++;
                    
                    if (roundWon(startPage.playerOne.getPlayerName()))
                    {
                        playerOneLiveScore++;
                        playerOneScore.textContent = playerOneLiveScore;
                        if (gameOverCheck())
                        {
                            document.querySelector('.endgameMessage').textContent = startPage.playerOne.getPlayerName().toUpperCase() + " has won!";
                            document.querySelector('.overlay').classList.remove('hidden');
                        }
                        else {
                            restartBoard();
                        }
                    }
                    else if (drawCheckCounter === 9)
                    {
                        restartBoard()
                    }
                    else 
                    {
                        playerOneTurn = false;
                    }
                }
                else{
                    e.target.classList.add(startPage.playerTwo.getPlayerName());
                    gameboard.setBoxValue(e.target.id, startPage.playerTwo.getPlayerName());
                    drawCheckCounter++;
                    
                    if (roundWon(startPage.playerTwo.getPlayerName()))
                    {
                        playerTwoLiveScore++;
                        playerTwoScore.textContent = playerTwoLiveScore;
                        if (gameOverCheck())
                        {
                            document.querySelector('.endgameMessage').textContent = startPage.playerTwo.getPlayerName().toUpperCase() + " has won!";
                            document.querySelector('.overlay').classList.remove('hidden');
                        }
                        else{
                            restartBoard();
                        }
                    }
                    else if (drawCheckCounter === 9)
                    {
                        restartBoard();
                    }
                    else 
                    {
                        playerOneTurn = true;
                    }
                }
            }
        });
    });

    const roundWon = (playerName) =>{

        if (playerName === gameboard.getBoxValue(0) && 
        playerName === gameboard.getBoxValue(1) && 
        playerName === gameboard.getBoxValue(2))
        {
            return true;
        }
        else if (playerName === gameboard.getBoxValue(3) && 
        playerName === gameboard.getBoxValue(4) && 
        playerName === gameboard.getBoxValue(5))
        {
            return true;
        }
        else if (playerName === gameboard.getBoxValue(6) && 
        playerName === gameboard.getBoxValue(7) && 
        playerName === gameboard.getBoxValue(8))
        {
            return true;
        }
        else if (playerName === gameboard.getBoxValue(0) && 
        playerName === gameboard.getBoxValue(3) && 
        playerName === gameboard.getBoxValue(6))
        {
            return true;
        }
        else if (playerName === gameboard.getBoxValue(1) && 
        playerName === gameboard.getBoxValue(4) && 
        playerName === gameboard.getBoxValue(27))
        {
            return true;
        }
        else if (playerName === gameboard.getBoxValue(2) && 
        playerName === gameboard.getBoxValue(5) && 
        playerName === gameboard.getBoxValue(8))
        {
            return true;
        }
        else if (playerName === gameboard.getBoxValue(0) && 
        playerName === gameboard.getBoxValue(4) && 
        playerName === gameboard.getBoxValue(8))
        {
            return true;
        }
        else if (playerName === gameboard.getBoxValue(2) && 
        playerName === gameboard.getBoxValue(4) && 
        playerName === gameboard.getBoxValue(6))
        {
            return true;
        }
        return false;
    };

    const gameOverCheck = () =>
    {
        if (playerOneLiveScore === 2 || playerTwoLiveScore === 2)
        {
            return true;
        }
        return false;
    };

    const restartBoard = () =>{
        gameboard.resetBoard();
        playerOneTurn = true; 
        drawCheckCounter = 0;
        liveGameBoard.forEach((box) =>{
            box.classList.remove(startPage.playerOne.getPlayerName());
            box.classList.remove(startPage.playerTwo.getPlayerName());
        });
    };
})();

function Player(name, playerImage){
    let privateName = name;
    let privatePlayerImage = playerImage;
    
    const getPlayerName = () =>{
        return privateName;
    } 
    const getPlayerImage = () =>{
        return privatePlayerImage;
    }
    const setPlayerNameAndImage = (newName, newImage) =>{
        privateName = newName;
        privatePlayerImage = newImage;
    } 
    return {getPlayerName, getPlayerImage, setPlayerNameAndImage};
    
};




