import { FC, useEffect, useState } from 'react';
import styles from '../services.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceTablePropsType } from './service-table.props';

import { dataServiceTableComponent } from './dataServis';

const ServicesTable: FC<ServiceTablePropsType> = ({ activeService }) => {
    const [activeItem, setActiveItem] = useState(dataServiceTableComponent[0]);

    useEffect(() => {
        setActiveItem(dataServiceTableComponent[+activeService - 1]);
    }, [activeService]);

    return (
        <div className={styles.table}>
            <div className={styles.card}>
                <img src={'/' + activeItem.image} className={styles.cardImage} alt="" />
            </div>
            <div className={styles.finallyCard}>
                <Link href={activeService !== null ? '/' + activeService : '/'}>
                    <a>
                        <p className={styles.description}>{activeItem.description}</p>

                        <div className={styles.footer}>
                            <Image src={'/icons/arrow.png'} width={48} height={48} />
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default ServicesTable;
