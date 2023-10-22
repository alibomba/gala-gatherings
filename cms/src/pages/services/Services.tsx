import { useEffect, useState } from 'react';
import Error from '../../components/error/Error';
import Loading from '../../components/loading/Loading';
import axiosClient from '../../axiosClient';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ServiceTile from '../../components/serviceTile/ServiceTile';


import styles from './services.module.css';

const Services = () => {


    return (
        <main className={styles.main}>
            <Link to='/uslugi/dodaj' className={styles.main__button}>Dodaj</Link>
            <section className={styles.main__services}>
                <ServiceTile
                    id='123'
                    title='Ekskluzywny pakiet slubny'
                    price='18 000 - 22 000'
                    image='ekskluzywny-pakiet-slubny.webp'
                />
            </section>
        </main>
    )
}

export default Services
