import Navigation from '../Navigation/Navigation';
import Social from '../Social/Social';
import Wraper from '../Wraper/Wraper';
import styles from './Header.module.css';

function Header() {
	return (
		<header className={[styles.header]}>
			<Wraper className={[styles.wrapper]}>
				<Navigation />
				<Social />
			</Wraper>
		</header>
	);
}

export default Header;
