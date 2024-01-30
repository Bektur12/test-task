import React from 'react'
import { styled } from '@mui/material/styles'
import InputBase, { InputBaseProps } from '@mui/material/InputBase'
import FormControl from '@mui/material/FormControl'

type Props = InputBaseProps & {
	htmlFor?: string
	label?: string
	error?: boolean
	textError?: string
	width?: string
	placeholder?: string
	errorColor?: string
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
	(
		{
			label,
			htmlFor,
			errorColor,
			error,
			id,
			textError,
			placeholder,
			fullWidth = true,
			width,
			...props
		},
		ref,
	) => {
		const inputId = id || htmlFor

		return (
			<FormControl fullWidth={fullWidth} style={{ width }}>
				<Label htmlFor={htmlFor}>{label}</Label>
				<InputStyled
					placeholder={placeholder}
					error={Boolean(error)}
					id={inputId}
					ref={ref}
					{...props}
				/>
				<ErrorText errorColor={errorColor as string}>
					<span>{textError}</span>
				</ErrorText>
			</FormControl>
		)
	},
)

const InputStyled = styled(InputBase)<{ borderColor?: boolean }>(() => ({
	'&.MuiInputBase-root': {
		border: '1px solid #D9D9D9',
		borderRadius: '17px',
		padding: '6px 8px 6px 12px',
		background: '#FFFFFF',
		height: '33px',
	},
	'&.Mui-error': {
		border: '1px solid red !important',
	},
}))

const ErrorText = styled('span')<{ errorColor: string }>(({ errorColor }) => ({
	color: errorColor || 'red',
	fontSize: '12px',
	position: 'absolute',
	top: '100%',
	bottom: '0',
	right: '20px',
	fontWeight: '400',
	lineHeight: '19px',
	fontFamily: 'Inter',
	display: 'flex',
	gap: '4px',
	marginTop: '4px',
}))

const Label = styled('label')({
	color: '#7B7B7B',
	fontFamily: 'Inter',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: 'normal',
	marginBottom: '4px',
})
