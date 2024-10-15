import { WINNERS } from "../constants"

export const checkWinner = (boardToCheck) => {
    for(const winner of WINNERS) {
      const [a, b, c] = winner

      if(boardToCheck[a] 
        && boardToCheck[a] == boardToCheck[b]
        && boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a] // Regresa x u o
      }
    }
    return null
  }