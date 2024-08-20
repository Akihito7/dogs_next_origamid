"use client";

import Link from 'next/link';
import styles from './index.module.css';
import { usePathname } from 'next/navigation';
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
              borderColor: title === 'Minha conta' ? "#fb1" : '#eee',
              boxShadow: title === "Minha conta" ? "0 0 0 3px #fea" : ""
            }}
          >

            <svg width="28" height="28" viewBox="0 0 28 28" fill={title === "Minha conta" ? "#fb1" : "#333"}
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4h3a3 3 0 013 3v3a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm0 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H7zM7 15h3a3 3 0 013 3v3a3 3 0 01-3 3H7a3 3 0 01-3-3v-3a3 3 0 013-3zm0 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1H7zM18 4h3a3 3 0 013 3v3a3 3 0 01-3 3h-3a3 3 0 01-3-3V7a3 3 0 013-3zm0 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1h-3zM18 15h3a3 3 0 013 3v3a3 3 0 01-3 3h-3a3 3 0 01-3-3v-3a3 3 0 013-3zm0 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3z" />
            </svg>

          </button>
        </Link>
        <Link href='/account/post'>
          <button

            style={{
              borderColor: title === 'Postar foto' ? "#fb1" : '#eee',
              boxShadow: title === "Postar foto" ? "0 0 0 3px #fea" : ""
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill={title === "Postar foto" ? "#fb1" : "#333"}
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5a1 1 0 011 1v7h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H6a1 1 0 110-2h7V6a1 1 0 011-1z" />
            </svg>


          </button>
        </Link>
        <button onClick={handleLogout}>
          <svg width="28" height="28" viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2929 9.29289C19.6834 8.90237 20.3166 8.90237 20.7071 9.29289L24.7071 13.2929C25.0976 13.6834 25.0976 14.3166 24.7071 14.7071L20.7071 18.7071C20.3166 19.0976 19.6834 19.0976 19.2929 18.7071C18.9024 18.3166 18.9024 17.6834 19.2929 17.2929L21.5858 15H12C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13H21.5858L19.2929 10.7071C18.9024 10.3166 18.9024 9.68342 19.2929 9.29289Z" fill="#333" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 6C5 5.44772 5.44772 5 6 5H15C15.5523 5 16 5.44772 16 6V10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10V7H7V21H14V18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18V22C16 22.5523 15.5523 23 15 23H6C5.44772 23 5 22.5523 5 22V6Z" fill="#333" />
          </svg>

        </button>
      </div>
    </div>
  );
}
