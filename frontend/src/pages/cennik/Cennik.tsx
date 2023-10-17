
import { Link } from 'react-router-dom';
import ServiceTile from '../../components/serviceTile/ServiceTile';

import styles from './cennik.module.css';

const Cennik = () => {
    return (
        <>
            <nav className={styles.nav}>
                <Link to='/kontakt' className={styles.nav__button}>Kontakt</Link>
                <Link to='/jak-to-dziala' className={styles.nav__button}>Jak to działa</Link>
                <Link to='/lokacje' className={styles.nav__button}>Lokacje</Link>
            </nav>
            <main className={styles.main}>
                <ServiceTile
                    title='Organizacja wesela'
                    image='organizacja-wesela.webp'
                    price='8 000 - 20 000'
                >
                    Pomoc w zaplanowaniu i zrealizowaniu wymarzonego ślubu, włączając w to wybór lokalizacji, dekoracje, catering, muzyczną oprawę i koordynację wydarzenia.
                </ServiceTile>
                <ServiceTile
                    title='Organizacja wesela'
                    image='organizacja-wesela.webp'
                    price='8 000 - 20 000'
                >
                    Pomoc w zaplanowaniu i zrealizowaniu wymarzonego ślubu, włączając w to wybór lokalizacji, dekoracje, catering, muzyczną oprawę i koordynację wydarzenia.
                </ServiceTile>
                <ServiceTile
                    title='Organizacja wesela'
                    image='organizacja-wesela.webp'
                    price='8 000 - 20 000'
                >
                    Pomoc w zaplanowaniu i zrealizowaniu wymarzonego ślubu, włączając w to wybór lokalizacji, dekoracje, catering, muzyczną oprawę i koordynację wydarzenia.
                </ServiceTile>
                <ServiceTile
                    title='Organizacja wesela'
                    image='organizacja-wesela.webp'
                    price='8 000 - 20 000'
                >
                    Pomoc w zaplanowaniu i zrealizowaniu wymarzonego ślubu, włączając w to wybór lokalizacji, dekoracje, catering, muzyczną oprawę i koordynację wydarzenia.
                </ServiceTile>
                <ServiceTile
                    title='Organizacja wesela'
                    image='organizacja-wesela.webp'
                    price='8 000 - 20 000'
                >
                    Pomoc w zaplanowaniu i zrealizowaniu wymarzonego ślubu, włączając w to wybór lokalizacji, dekoracje, catering, muzyczną oprawę i koordynację wydarzenia.
                </ServiceTile>
                <ServiceTile
                    title='Organizacja wesela'
                    image='organizacja-wesela.webp'
                    price='8 000 - 20 000'
                >
                    Pomoc w zaplanowaniu i zrealizowaniu wymarzonego ślubu, włączając w to wybór lokalizacji, dekoracje, catering, muzyczną oprawę i koordynację wydarzenia.
                </ServiceTile>
                <ServiceTile
                    title='Organizacja wesela'
                    image='organizacja-wesela.webp'
                    price='8 000 - 20 000'
                >
                    Pomoc w zaplanowaniu i zrealizowaniu wymarzonego ślubu, włączając w to wybór lokalizacji, dekoracje, catering, muzyczną oprawę i koordynację wydarzenia.
                </ServiceTile>
            </main>
        </>
    )
}

export default Cennik
