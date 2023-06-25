import '../sass/App.scss'
import AnimatedBg from "../components/animatedbg/AnimatedBg";
import Header from "../components/header/Header";
import Welcome from '../components/welcome/Welcome';
import Loader from '../components/Loader';

function Home() {
  return (
    <div className="center container">
      <Loader/>
      <AnimatedBg/>
      <Header />
      <main>
        <Welcome />
      </main>
    </div>
  );
}

export default Home;
