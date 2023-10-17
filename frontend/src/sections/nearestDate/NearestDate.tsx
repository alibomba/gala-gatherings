

import styles from './nearestDate.module.css';

const NearestDate = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.section__heading}>Najbliższy wolny termin</h2>
            <div className={styles.section__dateContainer}>
                <p className={styles.section__date}>17 lis 2023</p>
            </div>
            <p className={styles.section__remaining}>Pozostało: 32 dni</p>
        </section>
    )
}

export default NearestDate
