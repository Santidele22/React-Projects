import "./btn.css"

interface btnInterface{
    handleClick: () => void,
    text:string
}

export function Button({handleClick, text}:btnInterface) {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}