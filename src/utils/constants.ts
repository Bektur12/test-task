import { Options } from './types'
import ChooseIcon from '../assets/svg/files.svg?react'
import FilesIcon from '../assets/svg/Union.svg?react'

export const OPTIONS: Options = {
	TOKENS: [
		{
			name: 'Toncoin',
			price: '1,253 TON',
			total: '2,889.32',
			Icon: ChooseIcon,
			id: '1',
		},
		{
			name: 'Bitcoin',
			price: '1,253 TON',
			total: '14.32',
			Icon: ChooseIcon,
			id: '2',
		},
		{
			name: 'Tether',
			price: '12.43 USDT',
			total: '12.46',
			Icon: FilesIcon,
			id: '3',
		},
	],
	ACTIVITY: [
		{
			name: 'Toncoin',
			price: '1,253 TON',
			total: '2,889.32',
			Icon: FilesIcon,
			id: '5',
		},
		{
			name: 'Toncoin',
			price: '1,253 TON',
			total: '2,889.32',
			Icon: FilesIcon,
			id: '6',
		},
		{
			name: 'Toncoin',
			price: '1,253 TON',
			total: '2,889.32',
			Icon: FilesIcon,
			id: '7',
		},
	],
}

export const TAB_ITEMS = [
	{ param: 'TOKENS', label: 'Tokens', index: 2 },
	{ param: 'ACTIVITY', label: 'Activity', index: 0 },
]

export const TOKENS = 'TOKENS'
