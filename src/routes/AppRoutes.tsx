import { Route, Routes } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />} />
		</Routes>
	)
}
