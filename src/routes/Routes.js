import React from 'react';
import { Routes as Paths , Route } from 'react-router-dom';
import CreateExpense from '../pages/CreateExpense';
import Dashboard from '../pages/Dashboard';
import EditExpense from '../pages/EditExpense';
import LandingPage from '../pages/LandingPage';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';

const Routes = () => {
  return (
    <Paths>
    <Route exact path='/' element={<LandingPage />} />
    <Route exact path='/dashboard' element={<Dashboard />} />
    <Route exact path='/create-expense' element={<CreateExpense />} />
    <Route exact path='/edit' element={<EditExpense />} />
    <Route exact path='/register' element={<SignUp />} />
    <Route path='*' element={<NotFound />} />
    </Paths>
  )
}

export default Routes