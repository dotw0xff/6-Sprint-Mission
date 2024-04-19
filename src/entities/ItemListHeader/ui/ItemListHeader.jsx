import { useCustomMediaQuery } from "/src/shared/hooks/useCustomMediaQuery.jsx";
import { Button } from "/src/shared/ui/Button.jsx";
import { ToggleList } from "/src/shared/ui/ToggleList.jsx";

import "../ItemListHeader.scss";

export function ItemListHeader({ setOrderBy, setKeyword }) {
  const { isDesktop, isMobile } = useCustomMediaQuery();

  const handleRecentSort = () => {
    setOrderBy("recent");
  };

  const handleFavoriteSort = () => {
    setOrderBy("favorite");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target["search"].value);
  };
  if (!isMobile) {
    return (
      <div className="ItemList__header--desktop">
        <span className="ItemList__title">
          {isDesktop ? "전체상품" : "판매 중인 상품"}
        </span>
        <form onSubmit={handleSearchSubmit} className="ItemList__form">
          <input
            name="search"
            placeholder={"검색할 상품을 입력해주세요"}
            className="ItemList__input"
          />
        </form>
        <a href="./items" className="ItemList__link">
          <Button
            classNames={["button--blue", "button--small"]}
            value={"상품 등록하기"}
          />
        </a>
        <div className="ItemList__ToggleList">
          <ToggleList
            options={[
              { name: "최신순", callback: handleRecentSort },
              { name: "좋아요순", callback: handleFavoriteSort },
            ]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="ItemList__header">
        <div className="flex-wrapper">
          <span className="ItemList__title">판매 중인 상품</span>
          <a href="./items" className="ItemList__link">
            <Button
              classNames={["button--blue", "button--small"]}
              value={"상품 등록하기"}
            />
          </a>
        </div>
        <div className="flex-wrapper">
          <form onSubmit={handleSearchSubmit} className="ItemList__form">
            <input
              name="search"
              placeholder={"검색할 상품을 입력해주세요"}
              className="ItemList__input"
            />
          </form>
          <ToggleList
            options={[
              { name: "최신순", callback: handleRecentSort },
              { name: "좋아요순", callback: handleFavoriteSort },
            ]}
          />
        </div>
      </div>
    );
  }
}
