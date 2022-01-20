import { Box, BoxProps } from '@mui/system';

export default function FullWidthPage({ children, ...props }: BoxProps) {
	return (
		<Box {...props} display='flex' flexDirection='column' minHeight='100vh'>
			{children}
		</Box>
	);
}
