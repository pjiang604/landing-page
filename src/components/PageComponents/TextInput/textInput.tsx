import { Button } from '@mui/material'
import styles from './textInput.module.css'
import useTheme from '@mui/material'
import Image from 'next/image'
import send from '../../../../public/images/send/send.png'

export default function TextInput() {

    return (
        <>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <label>Email</label>
                    <input className={styles.input} type='text' id='email' name='email' required />
                </div>
                <button className={styles.button}>
                    <Image
                    src={send}
                    alt='submit'/>
                </button>
            </form>

        </>


    )
}