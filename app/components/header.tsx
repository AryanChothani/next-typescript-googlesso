import Style from '../../styles/header.module.scss'
import { useRouter } from 'next/router';

const menuItems = [
    { label: `Dashboard`, url: `/dashboard` },
    { label: `Chart`, url: `/charts` },
    { label: `Blogs`, url: `/blogs` },
];

const Header = () => {
    const router = useRouter();

    return (

        <div className={Style.navbarArea}>
            <div className={Style.container}>
                <nav className={Style.siteNavbar}>
                    <ul>
                        {menuItems.map(({ url, label }, index) => (
                            <li key={index}>
                                <a href={url} onClick={() => {
                                    router.replace("/");
                                }
                                }>{label}</a>
                            </li>
                        ))}
                    </ul>
                    <button className={Style.navToggler}>
                        <span></span>
                    </button>
                </nav>
            </div>
        </div >
    );
};

export default Header;