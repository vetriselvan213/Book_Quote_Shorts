import { likeQuote } from '../services/quotes';

type Quote = {
  id: number;
  text: string;
  author?: string;
  bookTitle?: string;
  likes: number;
};

export default function QuoteCard({ quote, onLike }: { quote: Quote; onLike: () => void }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <p>“{quote.text}”</p>
      <p>
        — <strong>{quote.author || 'Unknown'}</strong>, <em>{quote.bookTitle || 'Untitled'}</em>
      </p>
      <button onClick={async () => {
        await likeQuote(quote.id);
        onLike();
      }}>
        ❤️ {quote.likes}
      </button>
    </div>
  );
}
