import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { PropsType } from '../../types/props';
import style from './brand.module.css';

const Brand = ({ ...props }: PropsType) => {
  return (
    <div className={style.brand}>
      <Link href="/">
        <a>{/* <Image src="/logo.png" alt="brand" width={154} height={39} /> */}</a>
      </Link>
    </div>
  );
};

export default Brand;
