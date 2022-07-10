
function SheduleTable(props) {
    const rows = props.data.map((elem, i) => {
        return (<tr key={i}>
            <td>{i+1}</td>
            <td>{new Date(elem.date).toLocaleDateString()}</td>
            <td>{elem.payment.toFixed(2)}</td>
            <td>{elem.paymentForDebt.toFixed(2)}</td>
            <td>{elem.percent.toFixed(2)}</td>
            <td>{elem.restDebt.toFixed(2)}</td>

        </tr>)
    })
    return (

        <table>
            <tr>
                <th>№"</th>
                <th>Date payment</th>
                <th>Sum payment</th>
                <th>Principal debt</th>
                <th>Percent</th>
                <th>Rest debt</th>
            </tr>
            <tbody>
            {rows}
            </tbody>

        </table>

    );
}

export default SheduleTable;


