import { Square } from "./Square"

export const WinnerModal = ({winner, newBoard}) => {
    return (
        <>
        {
            winner !== null && (
              <section className='winner'>
                <div className='text'>
                  <h2>
                    {
                      winner === false ? 'Empate' : `Ganó`
                    }
                  </h2>
    
                  <header className='win'>
                    {winner && <Square>{winner}</Square>}
                  </header>
    
                  <footer>
                    <button onClick={newBoard}>Empezar de nuevo</button>
                  </footer>
                </div>
              </section>
            )
        }
        </>
    )
}