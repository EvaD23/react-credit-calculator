
import DataField from "./DataField";

import BaseTable from "./BaseTable";
import { calcPayment, calcOverPayment, calcFullCreditPrice } from "./calculating";


function Calculator(props) {
    const sum =props.sum;
    const rate = props.rate;
    const term = props.term;
    const monthlyPayment = calcPayment(sum, term * 12, rate);
    const overpayment = calcOverPayment(term * 12, monthlyPayment, sum);
    const fullcredit = calcFullCreditPrice(sum, overpayment);
    return (
        <fieldset>
            <legend>Calculator</legend>
            <DataField name='Sum of credit' min={10000} max={2000000}
                step={10000} changeValue={props.setSum} value={sum} />
            <DataField name='Rate of credit' min={1} max={30} step={1}
                changeValue={props.setRate} value={rate} />
            <DataField name='Term of creadit' min={1} max={30} step={1}
                changeValue={props.setTerm} value={term} />
            <BaseTable payment={monthlyPayment} overpayment={overpayment} fullcredit={fullcredit}/>

        </fieldset>
    );
}

export default Calculator;