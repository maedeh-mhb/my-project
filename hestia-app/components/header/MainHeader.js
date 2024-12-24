
import classes from './header.module.scss';
import Link from 'next/link';
import logoimg from '../../src/app/assets/images/logo.png';
import Image from 'next/image';
import mainimg from '../../src/app/assets/images/main.png';

const menuItems= [
    {name:'خانه',tag:''},
    {name:'محصولات',tag:'Products'},
    {name:'تماس با ما',tag:'ContactUs'}
]

const MainHeader = () => {
    return (
        <section className={classes['header-container']}>
            <header className={classes['logo-container']}>
                <Link href={'/'}>
                    <Image src={logoimg} priority alt='logo'/>
                </Link>
            </header>
            <div className={classes['nav-menu-container']}>
            <nav>
                <ul>
                {menuItems.map((item,index)=><li key={index}>
                <Link href={"/" + item.tag} >
                {item.name}
                </Link> </li>)}
                </ul>
            </nav>
            </div>
            <section>
                <Image src={mainimg} alt='meditation'/>
            </section>
        </section>
    );
};

export default MainHeader;