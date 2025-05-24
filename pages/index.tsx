import { useEffect, useState } from "react";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://admin-flask-iipk.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">📚 Danh sách sách</h1>
      <ul className="mt-4 space-y-2">
        {books.map((book: any) => (
          <li key={book.id} className="border p-3 rounded shadow-sm">
            <p><strong>📖 Tên sách:</strong> {book.title}</p>
            <p><strong>✍️ Tác giả:</strong> {book.author}</p>
            <p><strong>💰 Giá:</strong> {book.price}.000 VND</p>
            <p><strong>📅 Năm xuất bản:</strong> {book.year_published}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
