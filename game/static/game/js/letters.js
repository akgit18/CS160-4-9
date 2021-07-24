const pointsdict = {
  "A": 1,
  "B": 3,
  "C": 3,
  "D": 2,
  "E": 1,
  "F": 4,
  "G": 2,
  "H": 4,
  "I": 1,
  "J": 8,
  "K": 5,
  "L": 1,
  "M": 3,
  "N": 1,
  "O": 1,
  "P": 3,
  "Q": 10,
  "R": 1,
  "S": 1,
  "T": 1,
  "U": 1,
  "V": 4,
  "W": 4,
  "X": 8,
  "Y": 2,
  "Z": 10
}

const points1dict = {
  "A": 2,
  "B": 4,
  "C": 4,
  "D": 3,
  "E": 2,
  "F": 5,
  "G": 3,
  "H": 5,
  "I": 2,
  "J": 9,
  "K": 6,
  "L": 2,
  "M": 4,
  "N": 2,
  "O": 2,
  "P": 4,
  "Q": 11,
  "R": 2,
  "S": 2,
  "T": 2,
  "U": 2,
  "V": 5,
  "W": 5,
  "X": 9,
  "Y": 3,
  "Z": 11
}

const freqdict = {
  "A": 9,
  "B": 2,
  "C": 2,
  "D": 4,
  "E": 12,
  "F": 2,
  "G": 3,
  "H": 2,
  "I": 9,
  "J": 1,
  "K": 1,
  "L": 4,
  "M": 2,
  "N": 6,
  "O": 8,
  "P": 2,
  "Q": 1,
  "R": 6,
  "S": 4,
  "T": 6,
  "U": 4,
  "V": 2,
  "W": 2,
  "X": 1,
  "Y": 2,
  "Z": 1
}

function placeword(word, i, j, dir) {
  // 1 = downward, 0 = rightward
  let wordscore=0;
  if (dir) {
    for (letter of word) {
      document.getElementById(i+","+j).value = letter;
      i++;
      wordscore+=pointsdict[letter.toUpperCase()];
    }
  } else {
    for (letter of word) {
      document.getElementById(i+","+j).value = letter;
      j++;
      wordscore+=pointsdict[letter.toUpperCase()];
    }
  }
  update_score(wordscore, current_team);
}

var score = [0,0];
var current_team = 0;
function update_score(points, team) {
  score[team] += points;
  console.log(score);
}
