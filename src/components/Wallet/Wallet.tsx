import { styled } from '@mui/material'
import { BlockchainActions } from '../Blockchains/BlockchainActions'
import RightIcon from '../../assets/svg/Icon.svg?react'

export const Wallet = () => {
	return (
		<Container>
			<TopPart>
				<Cancel>Cancel</Cancel>
				<Title>
					<span>DeWallet</span>
					<Bot>bot</Bot>
				</Title>
				<RightIcon />
			</TopPart>
			<InnerContainer>
				<Amount>
					<Dollars>
						$2,934<span>.32</span>
					</Dollars>
					<Description>TjkLk...5FGs</Description>
				</Amount>
				<BlockchainActions />
			</InnerContainer>
		</Container>
	)
}

const Container = styled('div')({})

const Amount = styled('p')({
	fontFamily: ' SF Pro',
	fontSize: '32px',
	fontWeight: 510,
	lineHeight: '28px',
	letterSpacing: '-0.2639999985694885px',
	textAlign: 'center',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '138px',
	backgroundColor: '#f6fbff',
})

const Description = styled('p')({
	fontFamily: 'SF Pro',
	fontSize: '14px',
	fontWeight: 400,
	lineHeight: '18px',
	textAlign: 'left',
	color: '#8E8E93',
})

const Dollars = styled('p')({
	fontSize: '40px',
	fontWeight: 400,
	lineHeight: '28px',
	span: {
		fontSize: '32px',
		fontWeight: 400,
		lineHeight: '28px',
		color: '#818990',
	},
	marginBottom: '12px',
})

const InnerContainer = styled('div')({})

const TopPart = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	padding: '12px 15px',
	alignItems: 'center',
})
const Title = styled('div')({
	fontFamily: 'SF Pro',
	fontWeight: '590',
	textAlign: 'center',
	display: 'flex',
	flexDirection: 'column',
})

const Bot = styled('span')({
	color: '#818990',
	fontSize: '13px',
})
const Cancel = styled('div')({
	color: '#007AFF',
	fontFamily: 'SF Pro',
})
