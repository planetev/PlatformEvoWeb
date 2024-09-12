export async function GET(request:any) {
  return new Response(JSON.stringify({ message: 'Hello, World!' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}