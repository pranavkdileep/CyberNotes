import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from CARTS where user_id=1`;
  console.log(rows);
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {rows.map((row) => (
          <li key={row.id}>{row.product_id}</li>
        ))}
      </ul>
    </div>
  );
}