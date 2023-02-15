
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { RiAddCircleFill } from 'react-icons/ri';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = (ev) => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

        return (
                <tr>
                <td>{props.name}</td>
                <td>{currency}{props.cost}</td>
                <td><RiAddCircleFill onClick={event=> increaseAllocation(props.name)}/></td>
                <td><TiDelete size='1.5em' onClick={event => handleDeleteExpense(event)}/></td>
                </tr>
        );
};

export default ExpenseItem;

