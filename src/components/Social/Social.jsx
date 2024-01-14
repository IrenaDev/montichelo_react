import React from 'react';
import list from './Social.data';
import styles from './Social.module.css';

// eslint-disable-next-line react/prop-types
function Social() {
	return (
		<div className={styles.social}>
			{list.map((item, index) => {
				return <Item key={'social-item-key' + index} {...item} />;
			})}
		</div>
	);
}

// function Item({ icon, href }) {
// 	return (
// 		<a href={href} className={styles.icon}>
// 			<img src={'/' + icon + '.svg'} />
// 		</a>
// 	);
// }

class Item extends React.Component {
	render() {
		return (
			<a href={this.props.href} className={styles.icon}>
				<img src={'/' + this.props.icon + '.svg'} />
			</a>
		);
	}
}

export default Social;
