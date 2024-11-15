import { Turns } from "../enum/playOptions"


export const XIsNext = (value:number) => value % 2 === 0

export const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

export const checkerWin = (board:Turns[]) => {
    if(!board){
        throw new Error("Board is undefined");
    }
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false
}
export function isDraw (board:Turns[]){
    return board.every(square => square !== null)
}