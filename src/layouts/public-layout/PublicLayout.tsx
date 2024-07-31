import { Outlet } from 'react-router-dom';
import { Header } from '@psycron/components/header/Header';
import { Text } from '@psycron/components/text/Text';
import {
  PublicLayoutContent,
  PublicLayoutWrapper,
} from './PublicLayout.styles';
import { Link } from '@psycron/components/link/Link';
import { Box } from '@mui/material';

export const PublicLayout = () => {
  return (
    <>
      <PublicLayoutWrapper>
        <Header />
        <PublicLayoutContent>
          <Outlet />
        </PublicLayoutContent>
      </PublicLayoutWrapper>
      <Box>
        <Text mb={3} id='about'>
          Would you like to get in touch?
          <Link to='https://www.linkedin.com/in/gustavo-magnago/'>
            Find me here
          </Link>
        </Text>
        <Text variant='caption' mb={5}>
          Illustrations by
          <Link
            to='https://icons8.com/illustrations/author/zD2oqC8lLBBA'
            target='_blank'
            rel='noreferrer'
          >
            Icons 8
          </Link>
          from
          <Link
            to='https://icons8.com/illustrations'
            target='_blank'
            rel='noreferrer'
          >
            Ouch!
          </Link>
        </Text>
      </Box>
    </>
  );
};