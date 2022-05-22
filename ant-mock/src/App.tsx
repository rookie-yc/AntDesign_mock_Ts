import React, {useState} from 'react';
import Button from './components/Button/button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/Icon';
import Transition from './components/Transition/transition';

library.add(fas)
const App: React.FC =() => {
  const [show, setShow]= useState (false)
  return ( 
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme='primary' size='10x'/>
        <Menu defaultIndex='0' onSelect={(index) => {alert(index)}}defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link1
          </MenuItem>
          <MenuItem>
            cool link2
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
            <MenuItem>
              dropdown3
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link3
          </MenuItem>
        </Menu>
        <Button size='lg' onClick={() => { setShow(!show )}}>
          Toggle
        </Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
            <p>
              xxxxxxxxxxx
            </p>
            <p>
              xxxxxxxxxxx
            </p>
            <p>
              xxxxxxxxxxx
            </p>
          </div>
        </Transition>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
