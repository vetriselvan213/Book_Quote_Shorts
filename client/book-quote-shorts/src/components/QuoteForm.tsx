import { useState } from 'react';
import { createQuote } from '../services/quotes';

export default function QuoteForm({ onSubmit }: { onSubmit: () => void }) {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [bookTitle, setBookTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createQuote({ text, author, bookTitle });
    setText('');
    setAuthor('');
    setBookTitle('');
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Quote text"
        required
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <input
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
        placeholder="Book title"
      />
      <button type="submit">Add Quote</button>
    </form>
  );
}
