
import ServiceTile from '../../components/serviceTile/ServiceTile';
import { Link } from 'react-router-dom';

import styles from './featuredOffers.module.css';

const FeaturedOffers = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.section__heading}>Polecane pakiety</h2>
            <div className={styles.section__column}>
                <ServiceTile
                    title='Ekskluzywny pakiet ślubny'
                    image='ekskluzywny-pakiet-slubny.webp'
                    price='25 000'
                >
                    Nasz najbardziej luksusowy pakiet dla przyszłych małżonków, obejmujący kompleksową organizację ślubu, w tym wybór lokacji, dekoracje, catering, i koordynację. To rozwiązanie dla tych, którzy marzą o bajkowym ślubie.
                </ServiceTile>
                <ServiceTile
                    title='Pakiet urodzinowy deluxe'
                    image='pakiet-urodzinowy-deluxe.webp'
                    price='10 000'
                >
                    Idealny pakiet na urodziny, który zawiera przygotowanie dekoracji, katering, rozrywkę oraz koordynację. Zapewniamy, że Twój dzień będzie pełen zabawy i niespodzianek.
                </ServiceTile>
                <ServiceTile
                    title='Impreza firmowa all-inclusive'
                    image='impreza-firmowa-all-inclusive.webp'
                    price='11 000'
                >
                    Nasz pakiet dla firm, który obejmuje organizację konferencji, bankietów, eventów integracyjnych i więcej. Zapewniamy kompleksową obsługę, od planowania po realizację.
                </ServiceTile>
            </div>
            <Link to='/cennik' className={styles.section__button} >Zobacz więcej</Link>
        </section>
    )
}

export default FeaturedOffers
