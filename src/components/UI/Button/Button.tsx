import MuiButton, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material'

const BTN_SIZE_SETTINGS = {
	small: '12px',
	medium: '14px',
	large: '16px',
	extra: '20px',
}

type Props = ButtonProps & {
	isLoading?: boolean
	isDisabled?: boolean
}

export const Button = ({
	size,
	children,
	isLoading,
	isDisabled,
	variant = 'contained',
	...otherProps
}: Props) => {
	return (
		<StyledButton
			size={size}
			variant={variant}
			disabled={isLoading || isDisabled}
			{...otherProps}
		>
			{isLoading ? <span>loading...</span> : children}
		</StyledButton>
	)
}

const StyledButton = styled(MuiButton)(({ size }) => {
	return {
		fontFamily: 'SF Pro',
		height: '43px',
		padding: '0px 8px',
		fontSize: size ? BTN_SIZE_SETTINGS[size] : '15px',
		fontWeight: '590',
		lineHeight: '22px',
		borderRadius: '40px',
		backgroundColor: '#007AFF',
		color: '#FFFFFF',
		textTransform: 'capitalize',
	}
})
