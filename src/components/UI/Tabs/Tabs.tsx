import { styled } from '@mui/material/styles'
import MuiTabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { TabsProps } from '../../../utils/types'

export const Tabs = ({
	tabItems = [],
	width,
	value,
	onChange,
	...otherProps
}: TabsProps) => {
	return (
		<TabsContainer>
			<StyledTabs
				variant='fullWidth'
				{...otherProps}
				width={width as string}
				value={value}
				onChange={onChange}
			>
				{tabItems.map((tab) => {
					return (
						<StyledTab
							value={tab.param}
							key={tab.param}
							label={tab.label}
						/>
					)
				})}
			</StyledTabs>
		</TabsContainer>
	)
}

const StyledTabs = styled(MuiTabs)<{ width: string }>(({ width }) => ({
	'& .MuiTabs-flexContainer': {
		borderRadius: '8.91px',
		width: width || '100%',
		background: '#74748014',
		textTransform: 'capitalize',
		lineHeight: '18px',
		letterSpacing: '0em',
		color: '#000000',
		fontSize: '13px',
		fontStyle: 'normal',
		fontWeight: '400',
		paddign: '2px 3px',
	},
	'& .MuiTabs-indicator': {
		display: 'none',
	},
}))

const TabsContainer = styled('div')(() => ({
	'& .MuiTabs-root': {
		minHeight: '0px !important',
	},
}))

const StyledTab = styled(Tab)({
	'&.Mui-selected': {
		fontFamily: 'Inter',
		background: '#FFFF',
		border: '0.5px solid #74748014',
		boxShadow: '0px 3px 1px 0px #0000000A',
		height: '28px',
		margin: '4px',
		width: '178px',
		borderRadius: '6.93px',
		color: '#000000',
	},

	'&.MuiTab-root': {
		minHeight: '28px',
		paddingTop: '6px',
	},
})
