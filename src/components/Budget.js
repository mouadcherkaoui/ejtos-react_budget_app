
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currentBudget } = useContext(AppContext);
    const [ budget, setBudget] = useState(currentBudget);
    //let setCost = cost => budget = cost;
    return (
        <div className='alert alert-secondary'>
                <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
            <span>Budget: £{budget}</span>
        </div>
    );
};

export default Budget;
