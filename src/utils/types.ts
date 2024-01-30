/* eslint-disable no-mixed-spaces-and-tabs */
import { FunctionComponent, ReactNode, SVGProps, SyntheticEvent } from 'react'

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

type Icon =
	| ReactNode
	| FunctionComponent<
			SVGProps<SVGSVGElement> & { title?: string | undefined }
	  >

export interface Option {
	name: string
	price: string
	total: string
	Icon?: Icon
	id?: string
}

export interface Options {
	TOKENS: Option[]
	ACTIVITY: Option[]
}

export interface TokenCardProps extends Option {
	Icon?: Icon
}
