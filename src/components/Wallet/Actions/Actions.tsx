/// <reference types="vite-plugin-svgr/client" />
import { styled } from '@mui/material'
import { Button } from '../../UI/Button/Button'
import Deposit from '../../../assets/svg/Shape.svg?react'
import Send from '../../../assets/svg/send.svg?react'
import Buy from '../../../assets/svg/buy.svg?react'

export const Actions = () => {
	return (
		<Wrapper>
			<DepositButton startIcon={<Deposit />}>Deposit</DepositButton>
			<ButtonStyled startIcon={<Send />}>Send</ButtonStyled>
			<ButtonStyled startIcon={<Buy />}>Buy</ButtonStyled>
		</Wrapper>
	)
}

const ButtonStyled = styled(Button)({
	'&.MuiButtonBase-root': {
		background: '#007AFF1A',
		color: '#007AFF',
		padding: '15px 35px',
	},
})

const DepositButton = styled(Button)({
	'&.MuiButtonBase-root': {
		background: '#007AFF',
		padding: '14px 24px',
	},
})

const Wrapper = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	gap: '8px',
})
