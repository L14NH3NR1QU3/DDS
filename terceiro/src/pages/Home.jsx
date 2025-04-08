import Button from 'react-bootstrap/Button';
import MyCard from '../components/MyCard';

const Home = () => {

  return (
    <div>
      <h1>Home</h1>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-primary">Segundo</Button>
      <MyCard titulo="Flamengo" img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/250px-Flamengo_braz_logo.svg.png" desc="É o homi" button="Entrar" tipButton="outline-primary"/>
      <MyCard titulo="Homi" img="https://i.scdn.co/image/ab67616d00001e024198c92ec28483da79c7894d" desc="Sobre" button="Mais" tipButton="primary"/>
    </div>
  );
};

export default Home;
