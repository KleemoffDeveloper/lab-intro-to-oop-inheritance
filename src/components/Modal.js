export default function Modal({message}) {
    return (
        <div className="modal">
            <div className="modal-banner">
                <p>{message}</p>
                <button onClick={() => window.open(window.location, '_self')}>Play again?</button>
            </div>
        </div>
    )
}