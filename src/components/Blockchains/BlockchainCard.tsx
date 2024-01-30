/* eslint-disable no-mixed-spaces-and-tabs */
import { styled } from '@mui/material'
import { TokenCardProps } from '../../utils/types'

export const BlockchainCard = ({
	price,
	name,
	total,
	Icon,
}: TokenCardProps) => {
	return (
		<Card>
			<TopPart>
				{Icon && typeof Icon === 'function' ? <Icon /> : Icon}{' '}
				<div>
					<h4>{price}</h4>
					<Name>{name}</Name>
				</div>
			</TopPart>
			<p>${total}</p>
		</Card>
	)
}

const Card = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	fontFamily: 'SF Pro',
})

const TopPart = styled('div')({
	display: 'flex',
	alignItems: 'center',
	gap: '12px',
	fontFamily: 'SF Pro',

	h4: {
		fontSize: '17px',
		fontWeight: 510,
	},
})

const Name = styled('span')({
	color: '#8E8E93',
	fontSize: '14px',
	fontWeight: '400',
})
