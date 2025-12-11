import { Suspense } from 'react'
import { AdminDashboard } from '@/components/dashboard/admin-dashboard'

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando panel de administración...</div>}>
      <AdminDashboard />
    </Suspense>
  )
}
