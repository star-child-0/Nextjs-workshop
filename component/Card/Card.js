import styles from "./Card.module.css"

export default function Card({char_name, desc, type="primary"}) {

	let cardStyles = [styles.card];
	if (type === "primary") {
		cardStyles.push(styles.primary);
	}

	return (
	<div className={cardStyles.join(" ")}>
		<img className={styles.cardImg} src="/rick-astley.jpg" alt="rick(not)sanchez"/>

		<div className={styles.cardText}>
			<div className={styles.cardName}>{char_name}</div>
			<div className={styles.cardDescription}>{desc}</div>
		</div>
	</div>
	)
}
