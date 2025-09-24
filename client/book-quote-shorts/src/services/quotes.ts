export async function fetchQuotes() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/quotes`);
  return res.json();
}

export async function createQuote(data: {
  text: string;
  author?: string;
  bookTitle?: string;
}) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/quotes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function likeQuote(id: number) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/quotes/${id}/like`, {
    method: 'POST',
  });
  return res.json();
}
