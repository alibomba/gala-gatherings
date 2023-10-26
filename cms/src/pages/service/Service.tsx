
import { BsCardImage } from 'react-icons/bs';

import Input from '../../components/input/Input';
import styles from './service.module.css';

const Service = () => {
    return (
        <form encType='multipart/form-data' className={styles.form}>
            <Input
                id='name'
                ariaLabel='Nazwa'
                placeholder='Nazwa'
                type='text'
                maxLength={50}
            />
            <Input
                id='price'
                ariaLabel='Cena'
                placeholder='Cena'
                type='text'
                maxLength={20}
            />
            <textarea id="description" cols={30} rows={10} className={styles.form__textarea} aria-label='Opis' placeholder='Opis' maxLength={255}></textarea>
            <input type="file" id='image' style={{ display: 'none' }} />
            <label htmlFor='image' className={styles.form__image}>
                <BsCardImage />
            </label>
            <div className={styles.form__row}>
                <input type="checkbox" id="isFeatured" />
            </div>
        </form>
    )
}

export default Service
