import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const menuList = [
    'Main',
    'about',
    'profile',
  ]
  return (
    <div className="App">
      <Header menuList={menuList} />
      <Content content={'lorem lorem lorem lorem'} />
      <Footer />
    </div>
  );
}

export default App;
