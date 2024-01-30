import { styled } from '@mui/material'
import BatteryIcon from '../../assets/svg/Battery.svg?react'
import CellularIcon from '../../assets/svg/Cellular Connection.svg?react'
import WifiIcon from '../../assets/svg/WiFi.svg?react'

export const StatusBar = () => {
	return (
		<StatusContainer>
			<p>9:41</p>
			<IconWrapper>
				<CellularIcon />
				<WifiIcon />
				<BatteryIcon />
			</IconWrapper>
		</StatusContainer>
	)
}

const StatusContainer = styled('div')({
	display: 'flex',
	width: '100%',
	padding: '18px 43px',
	justifyContent: 'space-between',
})

const IconWrapper = styled('div')({
	display: 'flex',
	gap: '7px',
})
