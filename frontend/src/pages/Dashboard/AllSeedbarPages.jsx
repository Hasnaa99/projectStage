import React from 'react'
import { Routes , Route} from 'react-router-dom'
import MainDash from './MainDash'
import Employees from './Employees'
import ListConge from './ListConge';
import ListAbsence from './ListAbsence';
import Events from './Events';
import View from './View';
import Edit from './Edit';
import RegisterEmploye from './RegisterEmploye';
import Inscrits from './Inscrits';

export default function AllSeedbarPages() {
  return (
    <>
            <Routes>
                <Route path="/dashboard" element={<MainDash/>}/>
                <Route path="/employees" element={<Employees/>}/>
                <Route path="/conges" element={<ListConge/>}/>
                <Route path="/absences" element={<ListAbsence/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/view/:id" element={<View/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
                <Route path="/events/:eventId/inscrits" element={<Inscrits/>}/>
                <Route path="/ajouterEmployer" element={<RegisterEmploye/>}/>
            </Routes>
    </>
  )
}

