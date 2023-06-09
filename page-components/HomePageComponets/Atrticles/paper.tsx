import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { PageComponentPropsType } from '../utils/pageComponents.props';
import styles from './paper.module.css';
import { WrapperHomeComponent } from '../wrapperHomeComponent';

import { useResponsive } from '../../../hooks/useResponsive';
import { breakPoints } from '../../../hooks/responsiveBreakPoints';

import { Typo, Button, FinallyCard } from '../../../components/utils/exportComponents';

export interface article {
    id: number;
    caption: string;
    image: string;
}

const articles: article[] = [
    {
        id: 1,
        caption:
            'Средняя задолженность по ипотеке в Челябинской области превысила 110 тыс. рублей (08.06.2021)',
        image: '/articles/300х200/11.png',
    },
    {
        id: 2,
        caption: 'В Челябинской области сократилась выдача потребительских кредитов (23.09.2019)',
        image: '/articles/300х200/13.png',
    },
    {
        id: 3,
        caption: 'Выбили со всех скидки и продолжаем работать (02.04.2020)',
        image: '/articles/300х200/14.png',
    },
];

const PaperPageComponent: FC<PageComponentPropsType> = ({ bgColor = 'var(--primary)' }) => {
    const [responsive] = useResponsive();
    const [widthScreen, setWidthScreen] = useState(breakPoints.isBigScreen);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidthScreen(responsive);
        } else {
            setWidthScreen(breakPoints.isBigScreen);
        }
    }, [responsive]);

    return (
        <WrapperHomeComponent bgColor={bgColor}>
            {widthScreen >= breakPoints.isDesktopOrLaptop && (
                <>
                    <Typo txtStyle={'H1'} className={styles.title}>
                        Статьи
                    </Typo>
                    <Typo txtStyle={'H4'} className={styles.subtitle}>
                        ФК «Одобрение» на рынке с 2009 года. Мы много говорим о финансовой <br />
                        грамотности и реальном положении дел финансового сектора. <br />{' '}
                        Познакомтесь с нашим мнением в СМИ.
                    </Typo>
                </>
            )}

            {widthScreen < breakPoints.isDesktopOrLaptop && (
                <>
                    <Typo txtStyle={'H2'} className={styles.title}>
                        Статьи
                    </Typo>
                    <Typo txtStyle={'H5'} className={styles.subtitle}>
                        ФК «Одобрение» на рынке с 2009 года. Мы много говорим о финансовой
                        <br />
                        грамотности и реальном положении дел финансового сектора. <br />
                        Познакомтесь с нашим мнением в СМИ.
                    </Typo>
                </>
            )}

            {widthScreen === breakPoints.isMobile && (
                <>
                    <div className={styles.articles}>
                        <div className={styles.article}>
                            <Link href={'/articles'}>
                                <a>
                                    <Image
                                        className={styles.articlePicture}
                                        layout={'fixed'}
                                        src={articles[0].image}
                                        width={240}
                                        height={180}
                                        alt={articles[0].caption}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </>
            )}

            <ul className={styles.articles}>
                {articles.map((article, index) => {
                    return (
                        <li key={index} className={styles.article}>
                            <Link href={'/articles'}>
                                <a>
                                    {(widthScreen === breakPoints.isDesktopOrLaptop ||
                                        widthScreen === breakPoints.isBigScreen) && (
                                        <Image
                                            className={styles.articlePicture}
                                            layout={'fixed'}
                                            src={article.image}
                                            width={300}
                                            height={200}
                                            alt={article.caption}
                                        />
                                    )}

                                    {widthScreen === breakPoints.isTablet && (
                                        <Image
                                            className={styles.articlePicture}
                                            layout={'responsive'}
                                            src={article.image}
                                            width={262}
                                            height={180}
                                            alt={article.caption}
                                        />
                                    )}
                                </a>
                            </Link>
                            <span className={styles.caption}>{article.caption}</span>
                        </li>
                    );
                })}

                <li className={''}>
                    <Link href={'/articles'}>
                        <a>
                            <FinallyCard
                                body={{ title: 'Все материалы', link: '/articles' }}
                                className={styles.finalCard}
                            />
                        </a>
                    </Link>
                </li>
            </ul>

            <Button fill={true} big={false} className={styles.btnAllCases}>
                Все материалы
            </Button>

            <div id={'expert'} />
        </WrapperHomeComponent>
    );
};

export default PaperPageComponent;
