import styles from "./Services.module.css"
import { motion } from "framer-motion";


const Services = () => {
	return (
		<section className={styles.services}>
			<h2>Отдых с пользой для здоровья</h2>
			<h3>5-дневный курс из пантовых ванн:</h3>
			<ul className={styles.list}>
				<li>Укрепляет иммунитет</li>
				<li>Восстанавливает мужскую силу</li>
				<li>Снимает стресс и усталость</li>
				<li>Улучшает работу кишечника</li>
				<li>Укрепляет суставы и связки</li>
				<li>Тонизирует кожу</li>
				<li>Омолаживает снаружи и изнутри</li>
			</ul>
			<motion.a
				href="tel:+77055523333"
				title="тел: +77055523333"
				whileHover={{
					backgroundColor: "#23a455",
					border: "2px solid #6ec1e4",
				}}
			>
				Забронировать курс
			</motion.a>
		</section>
	);
}

export default Services