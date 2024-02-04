export async function GET() {
  const res = await fetch("https://reqres.in/api/unknown", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
