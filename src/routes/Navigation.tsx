import { BrowserRouter, Navigate, Routes, Route, NavLink } from "react-router-dom"
import { routes } from "./routes"
import { Suspense } from "react"

import logo  from '../logo.svg'

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        {
                            routes.map( ({name, to}) => (
                                <li key={name}>
                                    <NavLink to={ to } className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{ name }</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map( ({ path, Component, name }) => (
                            <Route key={ name } path={ path } element={ <Component /> }/>
                        ))
                    }
                    <Route path='*' element={ <Navigate to={ routes[0].to } replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>

  )
}
