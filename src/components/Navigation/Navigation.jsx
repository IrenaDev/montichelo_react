import styles from './Navigation.module.css';

const list = ['ABOUT US', 'PROJECTS', 'NEWS', 'CONTACT'];

function Navigation() {
	return (
		<ul className={[styles.navigation]}>
			{list.map((title) => {
				return <Item key={'navigation-key-' + title} title={title} />;
			})}
		</ul>
	);
}

function Item({ title }) {
	return (
		<li className={[styles.item]}>
			<a className={[styles.link]} href='#'>
				{title}
			</a>
		</li>
	);
}

export default Navigation;
