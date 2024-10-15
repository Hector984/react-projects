export const saveBoardInStorage = ({board, turn}) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const deleteBoadrInStorage = () => {
    window.localStorage.clear()
}