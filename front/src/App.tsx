import React, { useEffect } from 'react'
import { Routes, Route, Outlet, BrowserRouter, Navigate } from 'react-router-dom'
import { AuthRoutes } from './auth/components/AuthRoutes'
import Header from './shared/components/Header'
import LinkRoutes from './links/components/LinkRoutes'
import { Logout } from './auth/components/Logout'
import { useAppSelector } from './shared/hooks/store'
import { useUserActions } from './auth/hooks/useUserActions'


function App() {

  const { error, errorMessage } = useAppSelector(({ user }) => user)
  const { addUserAction } = useUserActions()
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  
  useEffect(() => {
    if(token && userId) addUserAction(token, userId);
  }, []);

  useEffect(() => {
    if(error){
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    }
  }, [error]);

  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Outlet />}>
              <Route index element={<Navigate to={"./short"} />} />
              <Route path='/*' element={<LinkRoutes/>} />
              <Route path='/auth/*' element={<AuthRoutes />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='*' element={<><h2>Not Found</h2></>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
