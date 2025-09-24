import { useEffect, useState } from 'react';
import { fetchQuotes } from '../services/quotes';
import QuoteCard from '../components/QuoteCard';
import QuoteForm from '../components/QuoteForm';

type Quote = {
  id: number;
  text: string;
  author?: string;
  bookTitle?: string;
  likes: number;
  createdAt: string;
};


export default function Home() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const loadQuotes = async () => {
    const data = await fetchQuotes();
    setQuotes(data);
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📚 Book Quote Shorts</h1>
      <QuoteForm onSubmit={loadQuotes} />
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} onLike={loadQuotes} />
      ))}
    </div>
  );
}
