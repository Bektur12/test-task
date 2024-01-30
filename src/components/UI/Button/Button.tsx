import MuiButton, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material'

const BTN_SIZE_SETTINGS = {
	small: '12px',
	medium: '14px',
	large: '16px',
	extra: '20px',
}

type Props = ButtonProps & {
	isFullWidth: string
	isLoading: boolean
	isDisabled: boolean
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
		height: '43px',
		padding: '8px 12px',
		fontFamily: 'inherit',
		fontWeight: 400,
		fontSize: size ? BTN_SIZE_SETTINGS[size] : '16px',
		lineHeight: '22px',
	}
})
