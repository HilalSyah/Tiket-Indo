import React from 'react';
import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white rounded-lg shadow-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Terima Kasih!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Pesanan Anda telah diterima. Kami akan segera memprosesnya.
        </p>
        <Link href="/" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
