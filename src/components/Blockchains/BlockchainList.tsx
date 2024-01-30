import { OPTIONS } from '../../utils/constants'
import { Options } from '../../utils/types'
import { BlockchainCard } from './BlockchainCard'
import { useSearchParams } from 'react-router-dom'

export const BlockchainList = () => {
	const [params] = useSearchParams()

	const INDEX = params.get('TAB') as keyof Options

	return (
		<div>
			{OPTIONS[INDEX]?.map((item) => {
				return (
					<BlockchainCard
						key={item.id}
						price={item.price}
						name={item.name}
						total={item.total}
						Icon={item.Icon}
					/>
				)
			})}
		</div>
	)
}
