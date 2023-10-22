
import { MdEdit } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import styles from './serviceTile.module.css';

interface Props {
    id: string;
    title: string;
    price: string;
    image: string;
}

const ServiceTile = ({ id, title, price, image }: Props) => {
    return (
        <article className={styles.service}>
            <div className={styles.service__data}>
                <h3 className={styles.service__name}>{title}</h3>
                <p className={styles.service__price}>{price} PLN</p>
            </div>
            <img className={styles.service__img} src={`${process.env.REACT_APP_BACKEND_URL}/storage/services/${image}`} alt="obraz usługi" />
            <Link to={`/uslugi/${id}`} className={`${styles.service__button} ${styles.service__edit}`}>
                <MdEdit />
            </Link>
            <button className={`${styles.service__button} ${styles.service__delete}`}>
                <AiFillDelete />
            </button>
        </article>
    )
}

export default ServiceTile
