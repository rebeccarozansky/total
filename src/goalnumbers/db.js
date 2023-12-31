import GameClass from "../classes/GameStateClass";

const db = [
    [8, 9, 10, 14, 16, 20,328],
    [1, 4, 8, 11, 12, 13, 759],
    [2, 7, 9, 11, 12, 14, 34],
    [3, 5, 9, 11, 12, 14, 84],
    [1, 7, 9, 11, 12, 13, 74],
    [2, 5, 7, 11, 12, 14, 16],
    [3, 4, 5, 12, 13, 14, 178],
    [2, 4, 5, 11, 12, 14, 91],
    [1, 5, 9, 11, 12, 14, 93],
    [4, 7, 8, 12, 13, 14, 75],
    [5, 6, 8, 11, 13, 14, 46],
    [1, 3, 7, 11, 12, 14, 47],
    [1, 3, 9, 11, 12, 14, 32],
    [1, 2, 9, 11, 12, 13, 33],
    [1, 5, 9, 11, 13, 14, 1548],
    [2, 3, 9, 11, 12, 14, 134],
    [1, 8, 9, 11, 12, 14, 665],
    [2, 7, 8, 11, 12, 14, 0],
    [1, 2, 7, 11, 12, 13, 4],
    [4, 6, 8, 11, 13, 14, 476],
    [3, 4, 5, 12, 13, 14, 80],
    [2, 3, 6, 11, 12, 13, 15444],
    [3, 7, 9, 12, 13, 14, 574],
    [2, 5, 7, 11, 12, 13, 9],
    [1, 7, 8, 11, 12, 13, 587],
    [1, 2, 5, 11, 12, 14, 18],
    [2, 3, 4, 12, 13, 14, 27],
    [4, 6, 9, 11, 12, 14, 1097],
    [2, 3, 4, 12, 13, 14, 1044],
    [2, 4, 9, 11, 12, 14, 20328],
    [3, 6, 8, 11, 12, 14, 107],
    [1, 6, 7, 11, 12, 14, 51],
    [2, 5, 9, 11, 12, 14, 25],
    [2, 3, 5, 12, 13, 14, 70],
    [1, 4, 6, 11, 12, 13, 45],
    [1, 4, 5, 12, 13, 14, 38],
    [1, 5, 6, 11, 12, 13, 510],
    [2, 5, 8, 12, 13, 14, 30],
    [3, 5, 7, 11, 13, 14, 30023],
    [3, 6, 9, 12, 13, 14, 1436],
    [5, 6, 9, 11, 12, 14, 30],
    [6, 7, 9, 11, 12, 13, 24],
    [5, 6, 7, 11, 12, 14, 5],
    [3, 6, 9, 11, 12, 13, 196],
    [2, 6, 9, 12, 13, 14, 16],
    [4, 5, 6, 11, 13, 14, 15],
    [3, 8, 9, 12, 13, 14, 520],
    [3, 5, 6, 11, 13, 14, 163],
    [3, 5, 9, 11, 13, 14, 229],
    [2, 6, 7, 11, 12, 13, 46],
    [1, 4, 8, 11, 12, 14, 230],
    [3, 4, 7, 11, 13, 14, 90],
    [2, 7, 8, 11, 12, 13, 46],
    [3, 4, 6, 12, 13, 14, 18],
    [2, 8, 9, 11, 12, 14, 319],
    [1, 8, 9, 11, 13, 14, 1437],
    [1, 4, 9, 11, 12, 14, 8],
    [1, 3, 7, 11, 12, 14, 1827],
    [1, 5, 6, 11, 13, 14, 42],
    [1, 4, 5, 11, 12, 13, 216],
    [2, 5, 8, 12, 13, 14, 81],
    [3, 8, 9, 11, 12, 14, 112],
    [2, 5, 6, 11, 12, 13, 33],
    [1, 5, 9, 12, 13, 14, 372],
    [2, 5, 7, 11, 13, 14, 16],
    [2, 5, 6, 11, 12, 14, 8],
    [5, 6, 9, 11, 13, 14, 113],
    [2, 5, 7, 11, 13, 14, 93],
    [5, 6, 9, 11, 12, 13, 61],
    [3, 4, 5, 11, 12, 13, 17],
    [2, 7, 8, 11, 12, 14, 905],
    [1, 2, 5, 12, 13, 14, 33],
    [1, 3, 8, 12, 13, 14, 32],
    [3, 6, 7, 11, 12, 13, 20],
    [4, 7, 8, 11, 12, 13, 114],
    [2, 4, 9, 11, 12, 13, 68],
    [2, 8, 9, 11, 12, 13, 150],
    [3, 6, 9, 11, 12, 14, 76],
    [3, 7, 9, 11, 12, 13, 67],
    [2, 3, 6, 11, 13, 14, 9],
    [3, 6, 7, 11, 12, 14, 42],
    [2, 3, 8, 11, 12, 14, 39],
    [3, 6, 9, 11, 12, 13, 24],
    [4, 5, 7, 11, 12, 13, 10],
    [3, 7, 9, 11, 12, 13, 32],
    [2, 5, 7, 11, 13, 14, 540],
    [2, 3, 4, 12, 13, 14, 107],
    [1, 2, 4, 11, 12, 14, 468],
    [1, 4, 5, 11, 12, 14, 58],
    [2, 8, 9, 12, 13, 14, 167],
    [2, 3, 5, 12, 13, 14, 10],
    [3, 4, 9, 12, 13, 14, 24],
    [6, 8, 9, 12, 13, 14, 188],
    [6, 7, 8, 11, 12, 13, 15],
    [1, 2, 4, 12, 13, 14, 26],
    [2, 3, 8, 11, 13, 14, 180],
    [1, 6, 9, 11, 12, 14, 28],
    [4, 7, 9, 11, 13, 14, 147],
    [1, 3, 4, 12, 13, 14, 68],
    [2, 3, 8, 12, 13, 14, 52],
    [1, 4, 8, 11, 12, 13, 23]
]

function getRandomArrays() {
    let result = [];
    let indices = [];
  
    while(indices.length < 5) {
      let randomIndex = Math.floor(Math.random() * db.length);
      if(!indices.includes(randomIndex)) {
        indices.push(randomIndex);
        result.push(db[randomIndex]);
      }
    }
  
    return result;
  }

function getGameStates() {
        let result = [];
        let arrays = getRandomArrays();
        for(let i = 0; i < arrays.length; i++) {
        let gs = new GameClass(arrays[i].slice(0, 6), arrays[i][6]);
        result.push(gs);
        }
        return result;
}

let gamestatearray = getGameStates();

export default gamestatearray;