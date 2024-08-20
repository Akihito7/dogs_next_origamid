"use client";

import Link from 'next/link';
import styles from './index.module.css';
import { usePathname } from 'next/navigation';

import { AiOutlineAppstore } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { IoMdExit } from "react-icons/io";
import { Logout } from '@/server-actions/getUser';

export default function HeaderAccount() {
    // Define the paths object
    const paths: Record<string, string> = {
        '/account': "Minha conta",
        '/account/post': "Postar foto",
        '/account/statistics': "Estatísticas"
    };

    const pathname = usePathname();
    const title = paths[pathname] || "Página desconhecida";
    async function handleLogout() {
        await Logout();
    }

    return (
        <div className={styles.container}>
            <h2 className="title">{title}</h2>

            <div className={styles.containerButtons}>
                <Link href='/account'>
                    <button
                      style={{
                        borderColor : title === 'Minha conta' ? "#fb1" : '#eee',
                        boxShadow: title === "Minha conta" ? "0 0 0 3px #fea" : ""
                    }}
                    >
                        <AiOutlineAppstore size={26} color="black" />
                    </button>
                </Link>
                <Link href='/account/post'>
                    <button
                
                    style={{
                        borderColor : title === 'Postar foto' ? "#fb1" : '#eee',
                        boxShadow: title === "Postar foto" ? "0 0 0 3px #fea" : ""
                    }}
                    >
                        <GoPlus size={26} color="black" />
                    </button>
                </Link>
                <button onClick={handleLogout}>
                    <IoMdExit size={28} color="black" />
                </button>
            </div>
        </div>
    );
}
