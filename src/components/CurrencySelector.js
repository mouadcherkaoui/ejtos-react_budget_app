import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = (props) => {
    const { dispatch, currency } = useContext(AppContext);
//    const [currency, setCurrency] = useState('');

    const onSelect = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    };

    return(
          <DropdownButton title={`Currency ${currency}`} variant="success" onSelect={eventKey => onSelect(eventKey)}>
            <Dropdown.Item active={currency==='$'} eventKey="$" className="dropdown-item">$ Dollar</Dropdown.Item>
            <Dropdown.Item active={currency==='€'} eventKey="€" className="dropdown-item">€ Euro</Dropdown.Item>
            <Dropdown.Item active={currency==='£'} eventKey="£" className="dropdown-item">£ Pound</Dropdown.Item>
            <Dropdown.Item active={currency==='¥'} eventKey="¥" className="dropdown-item">¥ Yuan</Dropdown.Item>
          </DropdownButton>
    );
};

export default CurrencySelector;