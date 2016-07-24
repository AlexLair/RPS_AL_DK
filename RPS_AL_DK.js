var player1 = 'Player 1 '
var player1win = 0
var player2 = 'Player 2 '
var player2win = 0
  while (player2win < 3 && player1win < 3) {
var weapons = ['rock' , 'paper', 'scissors']
var weaponOfChoice1 = weapons[parseInt(Math.random()*weapons.length) %3];
var weaponOfChoice2 = weapons[parseInt(Math.random()*weapons.length) %3];
    console.log(weaponOfChoice1 + ' vs ' + weaponOfChoice2);
  switch (weaponOfChoice1 + weaponOfChoice2) {
    case 'paper' + 'rock':
      console.log('Player 1 Wins');
      player1win = player1win + 1
        break;
    case 'paper' + 'paper':
      console.log('Tie');
        break;
    case 'paper' + 'scissors':
      console.log('Player 2 Wins');
      player2win = player2win + 1
        break;
    case 'rock' + 'rock':
      console.log('Tie');
        break;
    case 'rock' + 'paper':
      console.log('Player 2 Wins');
      player2win = player2win + 1
        break;
    case 'rock' + 'scissors':
      console.log('Player 1 Wins');
      player1win = player1win + 1
        break;
    case 'scissors' + 'rock':
      console.log('Player 2 Wins');
      player2win = player2win + 1
        break;
    case 'scissors' + 'paper':
      console.log('Player 1 Wins');
      player1win = player1win + 1
        break;
    case 'scissors' + 'scissors':
      console.log('Tie');
        break;
    default:
      console.log('tie');
        break;
  }
    if (player1win === 3) {
      console.log('Player 1 is Champion');
  }
    if (player2win === 3){
      console.log('Player 2 is Champion');
  }
}
