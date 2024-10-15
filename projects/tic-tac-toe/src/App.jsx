import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { saveBoardInStorage, deleteBoadrInStorage } from './logic/storage'

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')

    return boardFromStorage 
    ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')

    return turnFromStorage ?? TURNS.x
  })

  const [winner, setWinner] = useState(null)

  const newBoard = () => {
    deleteBoadrInStorage()
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }

  const checkEndGame = (endBoard) => {
    return endBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {

    if(board[index] || winner) return 

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    saveBoardInStorage({
      board: newBoard,
      turn, newTurn
    })

    const newWinner = checkWinner(newBoard)

    if(newWinner) {
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }

  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={newBoard}>Empezar de nuevo</button>
      <section className='game'>
        {
          board.map((val, index) => {
            return (
              <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {val}
              </Square>
            ) 
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>

      <WinnerModal winner={winner} newBoard={newBoard}/>
    </main>    
  )
}

export default App
