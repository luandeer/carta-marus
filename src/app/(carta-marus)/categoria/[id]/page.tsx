
export default function Page({ params }: { readonly params: { readonly id: any } }) {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
}