import { Box, Pagination as MUIPagination } from '@mui/material';
import useViewport from '@psycron/hooks/useViewport';

import type { IPaginationProps } from './Pagination.types';

export const Pagination = ({
	totalPages,
	currentPage,
	onPageChange,
	...props
}: IPaginationProps) => {
	const { isMobile } = useViewport();

	return (
		<Box
			pt={5}
			pb={isMobile ? 5 : 2}
			display='flex'
			justifyContent='center'
			alignItems='center'
			height='100%'
		>
			<MUIPagination
				count={totalPages}
				page={currentPage}
				onChange={onPageChange}
				showFirstButton
				showLastButton
				{...props}
			/>
		</Box>
	);
};
