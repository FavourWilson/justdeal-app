import Link from 'next/link';
import cat from '../data/cats';
import headerStyles from '../styles/Header.module.css';

const Nav = () => {
  return (
    <nav className={headerStyles.nav}>
      <div className="xl:container xl:mx-auto flex flex-col h-12 py-2 items-center align-items-center sm:flex-row sm:justify-between">
        {cat.categories.map((categories) => (
          <div categories={categories} key={categories.category}>
            <ul className="list-none">
              <li>
                <Link href={`/${categories.slug}`}>
                  <a>{categories.category}</a>
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
