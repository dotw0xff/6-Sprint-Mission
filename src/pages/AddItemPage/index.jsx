import React, { useRef } from 'react';
import TopNavigation from 'components/TopNavigation';
import Button from 'components/Button';
import FormInput from 'components/FormInput';
import { FormHeader, AddItemTitle, FormContainer } from './style';

const AddItemPage = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <TopNavigation />
      <main>
        <form>
          <FormHeader>
            <AddItemTitle>상품 등록하기</AddItemTitle>
            <Button title="등록" />
          </FormHeader>
          <FormContainer>
            <FormInput
              id="itemImage"
              label="상품 이미지"
              type="file"
              ref={fileInputRef}
            />
            <div onClick={handleClick}>이미지 인풋??</div>

            <FormInput
              id="itemName"
              label="상품명"
              placeholder="상품명을 입력해주세요"
            />

            <FormInput
              id="itemDescription"
              label="상품 소개"
              placeholder="상품 소개를 입력해주세요"
              type="textarea"
            />

            <FormInput
              id="itemPrice"
              label="판매가격"
              placeholder="판매 가격을 입력해주세요"
            />

            <FormInput
              id="itemTag"
              label="태그"
              placeholder="태그를 입력해주세요"
            />
          </FormContainer>
        </form>
      </main>
    </>
  );
};

export default AddItemPage;
