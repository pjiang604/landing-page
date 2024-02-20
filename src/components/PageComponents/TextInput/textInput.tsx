import styles from './textInput.module.css'

import Image from 'next/image'
import send from '../../../../public/images/send/send.png'

export default function TextInput() {

    return (
        <>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <input className={styles.input} type='email' id='email' name='email' required placeholder='Email' />
                </div>
                <button className={styles.button}>
                    <Image
                        src={send}
                        alt='submit' />
                </button>
            </form>

        </>


    )
}