import Link from "next/link";

export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books", {
    cache: "no-store",
  });
  const books = await url.json();

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 flex flex-col items-center py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">BOOK LIST</h1>
        <p className="text-lg text-gray-600">Click on a book to see its details</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book: any) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {book.name}
            </h2>
            <Link
              href={`/${book.id}`}
              className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
