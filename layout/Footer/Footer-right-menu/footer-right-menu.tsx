import { FC } from 'react';
import Link from 'next/link';
import { footerRightMenu } from '../../../data/static.data';

const FooterRightMenu: FC = () => {
  return (
    <ul>
      {footerRightMenu.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.link}>
              <a target={item.target ? item.target : ''}>{item.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterRightMenu;
