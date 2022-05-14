import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
const App: React.FC =() => {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex='0' onSelect={(index) => {alert(index)}} mode="vertical" defaultOpenSubMenus={['2']}>
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
