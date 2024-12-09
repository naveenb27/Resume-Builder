import Feature from '../components/HomeComponents/Feature';
import Footer from '../components/HomeComponents/Footer';
import HomeHeader from '../components/HomeComponents/Header';
import Templates from '../components/HomeComponents/Templates';
import Testimonal from '../components/HomeComponents/Testimonal';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Testimonal />
      <Templates />
      <Feature />
      <Footer />
    </>
  );
};

export default Home;
