import styles from "./App.module.css";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Recommendations from "./components/Recommendations";

const App = (): JSX.Element => {
	return (
		<main className={styles.main}>
			<Header />
			<Services />
			<Recommendations />
			<About />
			<section className={styles.description}></section>
		</main>
	);
};

export default App;
