export default function Input(props) {
    return (
        <input type="number" 
            id="passwordSize" 
            min={4}
            value={props.sizePassword}
            onChange={(ev) => props.setSizePassword(ev.target.value)}
        />
    )
}