import { ReactNode, useState } from 'react'
import { SwipeableDrawer } from '@mui/material'

type DrawerProps = {
	children: ReactNode
}
export const Drawer = ({ children }: DrawerProps) => {
	const [open, setOpen] = useState(false)

	const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen)

	const openDrawer = () => setOpen(true)

	return (
		<div>
			<button onClick={openDrawer}>Open</button>
			<SwipeableDrawer
				anchor='bottom'
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				disableSwipeToOpen={false}
				ModalProps={{
					keepMounted: true,
				}}
			>
				{children}
			</SwipeableDrawer>
		</div>
	)
}
