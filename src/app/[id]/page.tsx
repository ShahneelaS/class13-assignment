import Link from "next/link";

export default async function DynamicBook({ params }: { params: { id: string } }) {
  const url = await fetch(`https://simple-books-api.glitch.me/books/${params.id}`, {
    cache: "no-store",
  });

  if (!url.ok) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">
          Book not found. Please return to the book list.
        </h1>
        <Link
          href="/"
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
        >
          Back to Book List
        </Link>
      </main>
    );
  }

  const book = await url.json();

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{book.name}</h1>
        <p className="text-gray-600 text-lg mb-4">
          <strong>Author:</strong> {book.author || "Unknown"}
        </p>
        <p className="text-gray-600 text-lg mb-4">
          <strong>Type:</strong> {book.type || "N/A"}
        </p>
        <p className="text-gray-600 text-lg mb-4">
          <strong>ID:</strong> {params.id}
        </p>
        <Link
          href="/"
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
        >
          Back to Book List
        </Link>
      </div>
    </main>
  );
}
