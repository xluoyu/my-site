import { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import DefaultLayout from '../layout'
import Login from '../views/Login'
import NotFound from '@/views/404'
import routes from './routes'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navigate to='/index' />} />
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<DefaultLayout />}>
          {
            routes.map(item => {
              if (item.component) {
                return (
                  <Route key={item.path} path={item.path} element={
                    <Suspense fallback={null}>
                      <item.component />
                    </Suspense>
                  }/>
                )
              } else {
                return null
              }
            })
          }
          <Route path='404' element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to='/404' />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router