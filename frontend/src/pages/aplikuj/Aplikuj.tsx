import { useState } from 'react';
import { AplikujHero } from '../../sections';
import axiosClient from '../../axiosClient';
import Error from '../../components/error/Error';
import Popup from '../../components/popup/Popup';

import styles from './aplikuj.module.css';

const Aplikuj = () => {
    const [error, setError] = useState<string | null>(null);
    const [validationError, setValidationError] = useState<string | null>(null);
    const [popup, setPopup] = useState<Popup>({ content: null, active: false, type: 'good' });

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
    }

    if (error) {
        return <Error>{error}</Error>
    }

    return (
        <>
            <AplikujHero />
            <main className={styles.main}>
                <header className={styles.main__header}>
                    <h2 className={styles.header__heading}>Jak to wygląda od kuchni</h2>
                    <p className={styles.header__text}>Dowiedz się, jak wygląda praca w GalaGatherings od kuchni. Nasza firma to nie tylko organizacja wydarzeń, to zespół pełen pasji i pomysłowości. Tutaj dowiesz się, jakie to uczucie być częścią naszej twórczej rodziny i jakie wyzwania czekają na Ciebie jako część naszego zgranego zespołu.</p>
                </header>
                <form onSubmit={submit} className={styles.main__form}>
                    <div className={styles.form__grid}>
                        <input required maxLength={100} placeholder='Imię' aria-label='Imię' type="text" className={styles.form__input} />
                        <input required maxLength={100} placeholder='Nazwisko' aria-label='Nazwisko' type="text" className={styles.form__input} />
                        <input required maxLength={55} placeholder='E-mail' aria-label='E-mail' type="email" className={styles.form__input} />
                        <input required maxLength={30} placeholder='Nr telefonu' aria-label='Numer telefonu' type="text" className={styles.form__input} />
                    </div>
                    <select required defaultValue='' aria-label='Pozycja w firmie' className={styles.form__select}>
                        <option value="">Pozycja w firmie</option>
                        <option value="Koordynator Wydarzeń">Koordynator Wydarzeń</option>
                        <option value="Specjalista ds. Dekoracji">Specjalista ds. Dekoracji</option>
                        <option value="Manager Klienta">Manager Klienta</option>
                        <option value="Kierownik Cateringu">Kierownik Cateringu</option>
                        <option value="Specjalista ds. Marketingu">Specjalista ds. Marketingu</option>
                        <option value="Koordynator Logistyki">Koordynator Logistyki</option>
                        <option value="Fotograf i Kamerzysta">Fotograf i Kamerzysta</option>
                        <option value="Specjalista ds. Social Media">Specjalista ds. Social Media</option>
                        <option value="Specjalista ds. Finansów">Specjalista ds. Finansów</option>
                        <option value="Specjalista ds. Technicznych">Specjalista ds. Technicznych</option>
                        <option value="Asystentka Biura">Asystentka Biura</option>
                        <option value="Specjalista ds. Zasobów Ludzkich">Specjalista ds. Zasobów Ludzkich</option>
                        <option value="Specjalista ds. Kreatywnych">Specjalista ds. Kreatywnych</option>
                        <option value="Doradca ds. Eventów">Doradca ds. Eventów</option>
                    </select>
                    <input id='cvInput' type="file" style={{ display: 'none' }} />
                    <label htmlFor='cvInput' className={styles.form__fileInput}>Dołącz CV</label>
                    <textarea maxLength={700} className={styles.form__textarea} cols={30} rows={10} placeholder='Napisz coś o sobie (opcjonalnie)' aria-label='Napisz coś o sobie (opcjonalnie)'></textarea>
                    {
                        validationError && <p role='alert' aria-live='assertive' className={styles.form__error}>{validationError}</p>
                    }
                    <button className={styles.form__button}>Aplikuj</button>
                </form>
                <Popup type={popup.type} active={popup.active}>{popup.content}</Popup>
            </main>
        </>
    )
}

export default Aplikuj
