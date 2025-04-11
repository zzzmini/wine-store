// src/components/WineCard.jsx
const WineCard = ({ wine }) => {
  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return price.toLocaleString();
    }
    if (typeof price === 'string') {
      return Number(price).toLocaleString();
    }
    return '0';
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
      <div className="relative h-48 overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
        <img
          src={wine.imageUrl}
          alt={wine.name}
          className="w-32 h-32 object-contain"
          onError={(e) => {
            e.target.src = "/vite.svg";
            e.target.className = "w-32 h-32 object-contain opacity-20";
          }}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{wine.name}</h2>
        <p className="text-sm text-gray-500">{wine.country} - {wine.region}</p>
        <p className="text-sm text-gray-500">🍇 {wine.grapeVariety} / {wine.vintage}</p>
        <p className="text-sm text-gray-500">{wine.description}</p>
        <p className="text-lg font-bold text-red-600 mt-2">₩{formatPrice(wine.price)}</p>
        <p className="text-sm text-gray-500">재고: {wine.stock}개</p>
      </div>
    </div>
  );
};

export default WineCard;
