

function DataField(props) {
    return (
        <div>
            <label>{props.name}</label>
            <br />
            <input type="number" value={props.value} onInput={(event) => {
                const value = event.target.value;
                if (value > props.max) {
                     props.changeValue(props.max);
                }
                else if (value < props.min) {
                    props.changeValue(props.min);
                }
                else {
                    props.changeValue(parseInt(event.target.value))
                };
            }} />
            <br />
            <input type='range' value={props.value}
                min={props.min} max={props.max} step={props.step}  onInput={(event) => { props.changeValue(parseInt(event.target.value)) }} />
        </div>
    );

}

export default DataField;