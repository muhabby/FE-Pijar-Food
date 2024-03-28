/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchMenu from './pages/SearchMenu'
// import Menu from './pages/Menu'
// import MenuDetail from './pages/MenuDetail'
// import MenuCreate from './pages/MenuCreate'
import DetailProfileRecipe from './pages/DetailProfileRecipe'
import AddMenu from './pages/AddMenu'
import DetailMenu from './pages/DetailMenu'
import EditMenu from './pages/EditMenu'

const Home = () => {
    return (
        <div>
            <DetailProfileRecipe/>
        </div>
    )
}

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to='/home' replace={true} />} />
                    <Route path='/home' element={<Home />}/>
                    {/* <Route path='/menu' element={<Menu />}/> */}
                    {/* <Route path='/menu/:id' element={<MenuDetail />}/> */}
                    {/* <Route path='/menu-create' element={<MenuCreate />}/> */}
                    <Route path='/detail-profile-recipe' element={<DetailProfileRecipe />}/>
                    <Route path='/add-menu' element={<AddMenu />}/>
                    <Route path='/detail-menu/:id' element={<DetailMenu />}/>
                    <Route path='/edit-menu/:id' element={<EditMenu />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App