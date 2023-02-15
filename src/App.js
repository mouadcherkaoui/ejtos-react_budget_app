import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import CurrencySelector from './components/CurrencySelector';
// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-4'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        <div className='col'>
                            {<Budget/>}
                        </div>
                        <div className='col'>
                            {<Remaining />}
                        </div>
                        <div className='col'>
                            {<ExpenseTotal/>}
                        </div>
                        <div className='col'>
                            {<CurrencySelector/>}
                        </div>
                        {/* {<ExpenseItem/>} */}
                        {/* Add Remaining component here under */}        

                        {/* Add ExpenseTotal component here under */}        

                        {/* Add ExpenseList component here under */}         

                        {/* Add ExpenseItem component here under */}        

                        {/* Add AllocationForm component here under */}        

                </div>
                <div className='row mt-3'>
                    {<ExpenseList/>}
                </div>
                <div className='row mt-3'>
                    {<AllocationForm/>}
                </div>

            </div>
        </AppProvider>
    );
};
export default App;