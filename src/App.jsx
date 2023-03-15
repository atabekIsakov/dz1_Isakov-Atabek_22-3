import './App.css';
import { Component } from './components/Component';
import { Component2 } from './components/Component';
import Button from './components/Button';
import Header from './components/Header';
function App() {
  const menuList = [
    'Main',
    'about',
    'profile',
  ]
  return (
    <div className="App">
     <Header menuList={menuList} />
     <Component 
     text={'Component1 fdsafdsa'} 
     description={'text for our  12321 212 component'} />
     <Component2 />
     <Button 
     clickText={'Click me propsd dsdscds'}
     />
    </div>
  );
}

export default App;
