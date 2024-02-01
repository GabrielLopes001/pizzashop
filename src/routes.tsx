import { createBrowserRouter } from 'react-router-dom'

import { DashBoard } from '@/pages/app/dashboard'
import { SingIn } from '@/pages/auth/sing-in'

import { AppLayout } from './pages/_layout/app'
import { AuthLayout } from './pages/_layout/auth'
import { SingUp } from './pages/auth/sing-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <DashBoard />,
      },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sing-in',
        element: <SingIn />,
      },
      {
        path: '/sing-up',
        element: <SingUp />,
      },
    ],
  },
])
