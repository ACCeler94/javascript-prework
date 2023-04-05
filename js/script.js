{
const playGame = function (moveId){
    clearMessages();

    const playerInput = moveId;
    const randomNumber = Math.floor(Math.random() * 3 + 1);


    const getMoveName = function (argMoveId){
    if(argMoveId == 1){
        return 'papier';
    } else if(argMoveId == 2){
        return 'kamień';
    } else if(argMoveId == 3){
        return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
    }

    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    console.log('Wylosowana liczba to: ' + randomNumber);
    console.log('Gracz wpisał: ' + playerInput);

    printMessage('Twój ruch to: ' + playerMove);
    printMessage('Mój ruch to: ' + computerMove);


    const displayResult = function (argComputerMove, argPlayerMove) {
        if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Wygrywa komputer!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Wygrywasz!');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Wygrywasz!');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Wygrywa komputer!');
        } else if(argComputerMove == 'kamień' && argPlayerMove  == 'nożyce'){
            printMessage('Wygrywa komputer!');
        } else if(argComputerMove == 'kamień' && argPlayerMove  == 'papier'){
            printMessage('Wygrywasz!');
        } else if(argComputerMove == argPlayerMove){
            printMessage('Remis!');
        } else if(argPlayerMove  == 'nieznany ruch'){
            printMessage('Błąd! Nieznany ruch!');
        }
    }

    displayResult(computerMove, playerMove);
}

document.getElementById('play-paper').addEventListener('click', () => playGame(1));
document.getElementById('play-rock').addEventListener('click', () => playGame(2));
document.getElementById('play-scissors').addEventListener('click', () => playGame(3));
}