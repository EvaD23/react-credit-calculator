
function BaseTable(props) {
    return (
        <table>
            <tr>
                <td>Monthly-payment</td>
                <td>{props.payment.toFixed(2)}</td>
            </tr>

            <tr>
                <td>Overpayment</td>
                <td>{props.overpayment.toFixed(2)}</td>
            </tr>

            <tr>
                <td>Fullcredit</td>
                <td>{props.fullcredit.toFixed(2)}</td>
            </tr>

        </table>

    );
}

export default BaseTable;