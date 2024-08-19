'use client';

import { useState } from 'react';
import styles from './index.module.css';
import { getCookies } from '@/server-actions/getCookies';
import { revalidatePhotosFeedAction } from '@/server-actions/getPhotos';
import { useRouter } from 'next/navigation';

export default function Post() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    if (!selectedFile) {
      alert('Por favor, selecione um arquivo.');
      return;
    }

    const formData = new FormData();
    const a = formData.append('nome', event.currentTarget.nome.value); 
    formData.append('peso', event.currentTarget.weight.value); 
    formData.append('idade', event.currentTarget.age.value); 
    formData.append('img', selectedFile); 

    const token = await getCookies();
    formData.append('token', token!!); 

    try {
      const response = await fetch('https://dogsapi.origamid.dev/json/api/photo', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro:', errorData);
        alert(`Erro: ${errorData.message}`);
      } else {
        const data = await response.json();
        console.log('Sucesso:', data);
        alert('Dados enviados com sucesso!');
        await revalidatePhotosFeedAction();
        router.push("/account")
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      alert('Erro ao enviar os dados.');
    }
  };

  return (
    <div className={styles.containerMain}>
      <form onSubmit={handleSubmit} className={styles.containerForm}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Nome</label>
          <input type="text" name="nome" id="name" required />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="weight">Peso</label>
          <input type="text" name="peso" id="weight" required />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="age">Idade</label>
          <input type="text" name="idade" id="age" required />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="file">Imagem</label>
          <input type="file" name="img" id="file" onChange={handleFileChange} required />
        </div>

        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
}
