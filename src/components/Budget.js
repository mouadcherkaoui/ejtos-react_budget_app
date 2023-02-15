
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { initialBudget, currency } = useContext(AppContext);
    const [ budget, setBudget] = useState(initialBudget);
    
    //let setCost = cost => budget = cost;
    return (
        <div className='row alert alert-secondary'>
            <div className="col">
                <span style={{float: 'left'}}>Budget: {currency}</span>
                <input
                    required='required'
                    type='number'
                    id='cost'
                    value={budget}
                    style={{ float: 'left', marginLeft: '1em', width: '10em'}}
                    onChange={(event) => { console.log(event.target.value); setBudget(event.target.value);}}>
                </input>
            </div>
        </div>
    );
};

export default Budget;
