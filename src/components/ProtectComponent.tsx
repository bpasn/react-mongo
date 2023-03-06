import { userInfo } from '@/typing.reduce'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

interface Props {
  userInfo?: userInfo
}

export default function ProtectComponent({ userInfo }: Props): React.ReactElement {
  return userInfo ? <Outlet /> : <Navigate to={'/login'} />
}