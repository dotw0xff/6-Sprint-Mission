const BASE_URL = `https://panda-market-api.vercel.app`;

export async function getItems({order, page, pageSize, keyword=""}) {
  const query = `?orderBy=${order}&page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  let response;
  try {
    response = await fetch(
      `${BASE_URL}/products${query}`
    );
  } catch(error) {
    throw new Error("주소가 유효하지 않습니다.");
  }
  if(!response.ok) {
    throw new Error("아이템을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function createItems(formData) {
  const response = await fetch(
    `${BASE_URL}/products`, {
      method: 'POST',
      body: formData
    });
  if(!response.ok) {
    throw new Error("아이템을 등록하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}