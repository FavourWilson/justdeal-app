import cat from "../data/cats";
import NavItems from "./NavItems";
import headerStyles from '../styles/Header.module.css';

const Nav = () => {
  return (
        <nav className={headerStyles.nav}>
          <div className="xl:container xl:mx-auto flex flex-col h-20 py-2 items-center align-items-center sm:flex-row sm:justify-between">
            {cat.categories.map((categories) => (
              <NavItems categories={categories} key={categories.category}>
                {categories.category}
              </NavItems>
            ))}
          </div>
        </nav>
  );
}
 
export default Nav;