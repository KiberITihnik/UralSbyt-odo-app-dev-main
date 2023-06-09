import { FC } from 'react';
import Link from 'next/link';
import { footerLeftMenu } from '../../../data/static.data';

const FooterLeftMenu: FC = () => {
  return (
    <>
      <ul>
        {footerLeftMenu.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.link}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FooterLeftMenu;
