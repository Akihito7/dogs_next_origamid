type PhotoIdProps = {
  params : {
    id : Number
  }
}

export default function PhotoId({ params } : PhotoIdProps) {
  console.log(params)
  return (
    <main>
      <h1>Photo : {params.id} </h1>
    </main>

  );
}
