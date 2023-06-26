import '../sass/App.scss'
import AnimatedBg from "../components/animatedbg/AnimatedBg";
import Header from "../components/header/Header";
import Welcome from '../components/welcome/Welcome';

function Home() {
  return (
    <div className="center container">
      <AnimatedBg/>
      <Header />
      <main>
        <Welcome />
      </main>
    </div>
  );
}

export default Home;
