import { menuItems } from "../../parameters/menuItems";
import MenuItems from "./MenuItems";
import './App.css'

const Navbar = () => {
  return (
    <div className='nav-area'>
    <nav>
      <ul className="menus">
        {
          //Por cada Item padre
          menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
          })
        }
      </ul>
    </nav>
    </div>
  )
}

export default Navbar;
