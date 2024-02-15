import Layout from '../Layout';
import Logo from './Logo';
import Auth from './Auth';
import style from './Header.module.css';
import {Outlet} from 'react-router-dom';


export const Header = () => (
  <>
    <header className={style.header}>
      <Layout>
        <div className={style.headerWrapper}>
          <Logo/>
          <Auth/>
        </div>
      </Layout>
    </header>
    <Outlet/>
  </>
);


