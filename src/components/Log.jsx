export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map((turn) => {
                return (<li key={`${turn.square.row}${turn.square.col}`}>
                    {`${turn.player} placed a piece at row ${turn.square.row}, col ${turn.square.col}`}
                </li>);
            })}
        </ol>
    );
}