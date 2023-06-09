import { FC } from 'react';
import { FooterContactProps } from './footer-contact.props';
import styles from './footer-contact.module.css';
import Link from 'next/link';
import Typo from '../Typography/typo';

const FooterContact: FC<FooterContactProps> = ({ label, link, className }) => {
  const link_to_str = link.split(':').pop();
  return (
    <div className={className}>
      <section className={styles.link}>
        <span>{label}</span>

        <Link href={link}>
          <a>{link_to_str}</a>
        </Link>
      </section>
    </div>
  );
};

export default FooterContact;
