import { Box, styled } from '@mui/material';
import { spacing } from '@psycron/theme/spacing/spacing.theme';

export const PublicLayoutWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: flex-start;
`;

export const PublicLayoutContent = styled(Box)`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0;
`;

export const FooterWrapper = styled(Box)`
	position: relative;
	padding: 0 ${spacing.large} ${spacing.large};
	z-index: 2;
`;
