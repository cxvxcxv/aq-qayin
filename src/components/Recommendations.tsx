import styles from "./Recommendations.module.css";
import vid1 from "../assets/vid/vid1.mp4";

const Recommendations = () => {
	return (
		<section className={styles.recommendations}>
			<div className={styles.recommendationsHeader}>
				<h2>Пантолечение</h2>
				<video loop muted autoPlay src={vid1}>
					Your browser does not support the video tag.
				</video>
			</div>
			<div className={styles.recommendationsInfo}>
				<h3>
					Пантовые ванны незаменимы для укрепления вашего организма в межсезонье
					при следующих симптомах:
				</h3>
				<ul className={styles.list}>
					<li>Cиндром хронической усталости</li>
					<li>Заболевания опорно-двигательного аппарата</li>
					<li>Импотенция</li>
					<li>Заболевания мочеполовой системы</li>
					<li>Расстройства нервной системы</li>
					<li>Патологии, связанные с работой ЖКТ</li>
				</ul>
			</div>
		</section>
	);
};

export default Recommendations;
