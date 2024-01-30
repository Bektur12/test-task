import { SyntheticEvent } from 'react'

export type TabItem = {
	param: string
	label: string
}

export type TabsProps = {
	tabItems: TabItem[]
	value: string
	onChange: (e: SyntheticEvent<Element, Event>, index: string) => void
	width?: string
}
