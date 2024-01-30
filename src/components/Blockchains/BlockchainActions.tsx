import { styled } from '@mui/material'
import { Button } from '../UI/Button/Button'
import { Tabs } from '../UI/Tabs/Tabs'
import BuyIcon from '../../assets/svg/Shape.svg?react'
import { BlockchainList } from '../Blockchains/BlockchainList'
import { useSearchParams } from 'react-router-dom'
import { Actions } from '../Wallet/Actions/Actions'
import { TAB_ITEMS, TOKENS } from '../../utils/constants'
import { Message } from '../Wallet/MessageBar/Message'

export const BlockchainActions = () => {
	const [params, setParams] = useSearchParams()

	const handleTabChange = (_: React.ChangeEvent<unknown>, value: string) => {
		setParams({ TAB: value })
	}
	return (
		<>
			<Container>
				<Actions />
				{params.get('TAB') == TOKENS && (
					<Button startIcon={<BuyIcon />} fullWidth>
						Buy DFC
					</Button>
				)}
				<Tabs
					tabItems={TAB_ITEMS}
					value={params.get('TAB') || TOKENS}
					onChange={handleTabChange}
				/>
				<BlockchainList />
			</Container>
			<Message />
		</>
	)
}

const Container = styled('div')({
	borderRadius: '32px 32px 0px 0px',
	width: '100%',
	padding: '24px 16px',
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
	background: '#FFFFF !important',
})
