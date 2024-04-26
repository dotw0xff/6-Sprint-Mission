import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/itemApi";

function ItemDescriptionPage() {
  const { itemId } = useParams();
  const [data, setData] = useState();

  const fetch = async () => {
    try {
      const res = await getProductById(itemId);
      setData(res);
    } catch (error) {
      console.error("상품 목록을 불러오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    if (!itemId) return;
    fetch();
  }, [itemId]);

  return (
    <div>
      <h2>이름: {data?.name}</h2>
      <p>Description: {data?.description}</p>
      <p>Price: {data?.price}</p>
      <p>Favorite Count: {data?.favoriteCount}</p>
    </div>
  );
}

export default ItemDescriptionPage;

// ㅠ.ㅠ
// api를 호출할 때는 (리액트에서)
// async, await와 같은 비동기 처리를 하며
// await => api res가 돌아올 때까지 잠시 멈처있음
// 그 후에 res를 setstate로 설정해야 컴포넌트가 리렌더링됨
// api를 실행시킬려면(외부시스템) useEffect가 필요함
// useEffect 훅에서도 의존성 배열을 가질 수 있음
// 의존성 배열에 itemid를 넣어두면 변할 때마다 작성된 코드를 실행
// 리액트에서의 state -> 의존성 배열의 변화에 따라 이전 값을 기억하고 있다가
// 다른 값이 업데이트 될 시 화면을 다시 렌더링한다
// 항상 async await를 잘 작성해야 함(못하면 promise 비어서 옴)
// try catch 사용하자(꼭)
