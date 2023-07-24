import styles from "./Header.module.css";

const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<span>
				<h1>Ақ-Қайың</h1>
				<h2>пантолечебница</h2>
			</span>
		</header>
	);
};

export default Header;
