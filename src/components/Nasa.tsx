import React, { useEffect, useState } from 'react';

// Define the type for the APOD data
interface ApodData {
  title: string;
  url: string;
  explanation: string;
}

const NasaGallery: React.FC = () => {
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const apiKey = '9bBXRYmHTPOrwuRln2kRqwRKbYDJfbGUuDNm0v51';

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data: ApodData = await response.json();
        setApodData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApod();
  }, [apiKey]);

  if (loading) return <p className="text-white text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  // Ensure apodData is not null before accessing its properties
  if (!apodData) {
    return <p className="text-red-500 text-center">No data available.</p>;
  }

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-white text-center mb-6">NASA Astronomy Picture of the Day</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">{apodData.title}</h2>
        <img src={apodData.url} alt={apodData.title} className="w-full rounded-lg mb-4" />
        <p className="text-gray-800">{apodData.explanation}</p>
      </div>
      <footer className="mt-6 text-center text-gray-400">
        <p>Powered by KimTech</p>
        <p>Email: elijahkimani1293@gmail.com | Phone: 0791337188</p>
      </footer>
    </div>
  );
};

export default NasaGallery;
