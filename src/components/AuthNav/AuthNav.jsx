import css from './AuthNav.module.css';
import CustomLink from '../CustomNavLink/CustomNavLink';

const AuthNav = () => {
    return (
        <div className={css.nav}>
            <CustomLink to='/register'>Sign Up</CustomLink>
            <CustomLink to='/login'>Log in</CustomLink>
        </div>
    )
}

export default AuthNav;