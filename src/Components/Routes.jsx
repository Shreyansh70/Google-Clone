import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import Results from './Results';

export const Routes = () => {
  return (
    <div className='p4'>
      <Switch>
        <Route exact path='/' element={<Navigate to="/websearch" replace />} />
        <Route path='/websearch' element={<Results />} />
        <Route path='/imagesearch' element={<Results />} />
        <Route path='/news' element={<Results />} />
        <Route path='/videosearch' element={<Results />} />
      </Switch>
    </div>
  );
};
