let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let computerMove = getMoveName(randomNumber);



printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);


printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove) {
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
