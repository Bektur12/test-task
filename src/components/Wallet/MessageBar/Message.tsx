import { styled } from '@mui/material'
import ChooseIcon from '../../../assets/svg/files.svg?react'
import VoiceIcon from '../../../assets/svg/VoiceIcon.svg?react'
import BurgerIcon from '../../../assets/svg/bar.svg?react'
import FilesIcon from '../../../assets/svg/Union.svg?react'
import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'

export const Message = () => {
	return (
		<MenuWrapper>
			<ButtonStyled startIcon={<BurgerIcon />}>Menu</ButtonStyled>
			<ChooseIcon width={33} />
			<Input endAdornment={<FilesIcon />} />
			<VoiceIcon width={50} />
		</MenuWrapper>
	)
}

const MenuWrapper = styled('div')({
	display: 'flex',
	background: '#78788029',
	width: '100%',
	padding: '6px 5px',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: '8px',
})

const ButtonStyled = styled(Button)({
	'&.MuiButtonBase-root': {
		padding: '5px 29px 5px 24px',
		height: '38px',
	},
})
