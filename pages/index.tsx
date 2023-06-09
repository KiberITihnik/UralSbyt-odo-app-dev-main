import type { NextPage } from 'next';
import { withLayout } from '../layout/layout';
import HomePage from '../page-components/HomePageComponets/home-page';

const Home: NextPage = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default withLayout(Home);
