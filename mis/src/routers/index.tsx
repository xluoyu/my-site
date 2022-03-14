import { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import DefaultLayout from '../layout'
import Index from '../views/Index'
import Login from '../views/Login'
import routes from './routes'

// const ChildrenRoutes = () => {
//   return (
//     routes.map(item => {
//       return (
//         item.children
//         <Route key={item.path} path={item.path} element={
//           <Suspense fallback={null}>
//             <item.component />
//           </Suspense>
//         }/>
//       )
//     })
//   )
// }

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router