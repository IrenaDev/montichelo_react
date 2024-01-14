/* eslint-disable react/prop-types */
import cn from 'classnames';
import styles from './Wraper.module.css';


function Wraper({ children, className =[] }) {
	return <div className={cn([styles.wrapper, ...className])}>{children}</div>;
}

export default Wraper;
