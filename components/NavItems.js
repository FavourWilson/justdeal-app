import Link from 'next/link';

const navItems = ({ categories }) => {
  return (
    <ul className="list-none">
      <li>
        <Link href={`/${categories.slug}`}>
          <a>{categories.category}</a>
        </Link>
        {/* <ul className="list-none flex flex-col">
          <li>
            <Link href={`/${categories.slug}`}>
              <a>{subCategories}</a>
            </Link>
          </li>
        </ul> */}
      </li>
    </ul>
  );
};

export default navItems;
