const API_BASE_URL = '/api';

export const getWines = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('와인 데이터를 불러오는데 실패했습니다.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching wines:', error);
    return [];
  }
}; 