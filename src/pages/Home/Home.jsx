import css from './Home.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div className={css.container}>
            {isLoggedIn
                ? <p className={css.greeting}>Welcome to your homepage!</p>
                : <p className={css.greeting}>Log in or Sign up to interact with your data.</p>
            }
        </div>
    );
}

export default Home;