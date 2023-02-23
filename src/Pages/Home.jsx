import '../App.css';
import Header from '../Components/Headers';
import LaunchDate from '../Components/LaunchDate';
import Footer from '../Components/Footer';
import SideBar from '../Components/SideBar';

function Home() {
  return (
    <>
    <section className = 'wrapper'>
        <Header />
          <LaunchDate />
        <Footer />
    </section>
    <SideBar />
    </>

    
  );
}

export default Home;
