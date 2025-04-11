import { useEffect, useState } from 'react';
import WineCard from './components/WineCard';
import { getWines } from './api/wineApi';

function App() {
  const [wines, setWines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const data = await getWines();
        setWines(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWines();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-10 flex items-center justify-center">
        <div className="text-2xl text-purple-800">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-10 flex items-center justify-center">
        <div className="text-2xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-10">🍷 와인 리스트</h1>
      <div className="test">Tailwind CSS 테스트</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wines.map((wine) => (
          <WineCard key={wine.id} wine={wine} />
        ))}
      </div>
    </div>
  );
}

export default App;
