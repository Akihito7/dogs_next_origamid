'use client'

import Link from 'next/link';
import styles from './index.module.css'

import { AiOutlineAppstore } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { IoMdExit } from "react-icons/io";
import { Logout } from '@/server-actions/getUser';

export default function HeaderAccount() {

    async function handleLogout(){
        await Logout();
    }
    return (

        <div className={styles.container}>
            <h2 className="title">Minha conta</h2>

            <div className={styles.containerButtons}>
                <Link href='/account'>
                    <button>
                        <AiOutlineAppstore size={26} color="black" />
                    </button>
                </Link>
                <Link href='/account'>
                    <button>
                        <AiOutlineAppstore size={26} color="black" />
                    </button>
                </Link>
                <Link href='/account/post'>
                    <button>
                        <GoPlus size={26} color="black" />
                    </button>
                </Link>
                <button onClick={handleLogout}>
                    <IoMdExit size={28} color="black" />
                </button>

            </div>
        </div>
    )
}
