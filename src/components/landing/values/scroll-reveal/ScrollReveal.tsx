import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { Text } from '@psycron/components/text/Text';
import useViewport from '@psycron/hooks/useViewport';
import { motionValue } from 'framer-motion';

import { OpacityChild } from './opacity-child/OpacityChild';
import {
	ImgWrapper,
	ScrollWrapper,
	StickyScroll,
	StyledArrayBox,
	StyledBox,
} from './ScrollReveal.styles';

export const ScrollReveal = () => {
	const { t } = useTranslation();
	const containerRef = useRef<HTMLDivElement>(null);

	const { isMobile, isTablet, isMedium, isLarge } = useViewport();

	const scrollYProgress = motionValue(0);

	const text = t('page.landing.values.text');
	const words = text.split(' ');
	const count = words.length;

	useEffect(() => {
		const handleScroll = () => {
			if (containerRef.current) {
				const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
				const progress = scrollTop / (scrollHeight - clientHeight);
				scrollYProgress.set(progress);
			}
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener('scroll', handleScroll);
			return () => container.removeEventListener('scroll', handleScroll);
		}
	}, [containerRef, scrollYProgress]);

	return (
		<ScrollWrapper ref={containerRef}>
			<StickyScroll>
				<ImgWrapper>
					<img
						src='/images/img-hero3.png'
						alt='3D illustration of a smartphone displaying graphs and charts.'
						style={{ transform: 'scaleX(-1)' }}
						width={250}
					/>
					{isMobile || isTablet ? (
						<Text variant='h2' fontWeight={800} fontSize='3rem' isFirstUpper>
							{t('page.landing.values.all-in-one')}
						</Text>
					) : null}
				</ImgWrapper>
				<Box>
					{isMedium || isLarge ? (
						<Box width='100%' mb={8}>
							<Text variant='h2' fontWeight={800} fontSize='3rem' isFirstUpper>
								{t('page.landing.values.all-in-one')}
							</Text>
						</Box>
					) : null}
					<StyledBox>
						{words.map((word, index) => (
							<OpacityChild
								key={index}
								progress={scrollYProgress}
								index={index}
								total={count}
							>
								{word}
							</OpacityChild>
						))}
					</StyledBox>
				</Box>
			</StickyScroll>
			{Array.from({ length: count }).map((_, index) => (
				<StyledArrayBox key={index} />
			))}
		</ScrollWrapper>
	);
};
