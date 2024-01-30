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
		lineHeight: '18px',
		letterSpacing: '0em',
		color: '#000000',
		fontSize: '12px',
		fontStyle: 'normal',
		fontWeight: '400',
		fontFamily: 'SF Pro',
		display: 'flex',
		alignItems: 'center',
	},
	'& .MuiTabs-indicator': {
		display: 'none',
	},
}))

const TabsContainer = styled('div')(() => ({}))

const StyledTab = styled(Tab)({
	'&.Mui-selected': {
		background: '#FFFF',
		border: '0.5px solid #74748014',
		boxShadow: '0px 3px 1px 0px #0000000A',
		margin: '4px',
		width: '178px',
		borderRadius: '6.93px',
		color: '#000000',
		fontSize: '13px',
		textTransform: 'capitalize',
		fontFamily: 'inherit',
	},

	'&.MuiTab-root': {
		textTransform: 'capitalize',
		fontFamily: 'inherit',
		height: '1px !important',
		minHeight: '1px !important',
	},
})
