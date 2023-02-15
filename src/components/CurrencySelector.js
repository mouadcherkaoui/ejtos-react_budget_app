import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    let currencyText = [];
    currencyText['$'] = "$ (Dollar)";
    currencyText['€'] = "€ (Euro)";
    currencyText['£'] = "£ (Pound)";
    currencyText['¥'] = "¥ (Yuan)";

    const onSelect = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    };


    return(
          <DropdownButton title={`Currency: ${currencyText[currency]}`} variant="success" onSelect={eventKey => onSelect(eventKey)}>
            <Dropdown.Item active={currency==='$'} eventKey="$" className="dropdown-item">{currencyText['$']}</Dropdown.Item>
            <Dropdown.Item active={currency==='€'} eventKey="€" className="dropdown-item">{currencyText['€']}</Dropdown.Item>
            <Dropdown.Item active={currency==='£'} eventKey="£" className="dropdown-item">{currencyText['£']}</Dropdown.Item>
            <Dropdown.Item active={currency==='¥'} eventKey="¥" className="dropdown-item">{currencyText['¥']}</Dropdown.Item>
          </DropdownButton>
    );
};

export default CurrencySelector;