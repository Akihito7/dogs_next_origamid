type PhotoIdProps = {
  params : {
    id : Number
  }
}

export default function PhotoId({ params } : PhotoIdProps) {
  return (
    <main>
      <h1>Photo : {String(params.id)}</h1>

    </main>

  );
}
