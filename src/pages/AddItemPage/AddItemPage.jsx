import React from 'react';
import './AddItemPage.css';
import { ReactComponent as AddIcon } from '../../assets/images/icons/ic_plus.svg';

function AddItemPage() {
  return (
    <div className='addItemContainer'>
      <div className='addItemMenu'>
        <div className='addItemTitle'>상품 등록하기</div>
        <a className='loginLink button' href='/#'>등록</a>
      </div>
      <div className='addItemImageList'>
        <div className='addItemImageListDescription'>
           상품 이미지
        </div>
        <div className='addItemImages'>
          <div className='addItemImageRegistration'>
            <div className='addItemImageRegistrationIcon'>
              <AddIcon/>
              <span>이미지 등록</span>
            </div>
          </div>
        </div>
      </div>
      <div className="inputBlock">
          <label htmlFor="productName">상품명</label>
          <input id="productName" type="text" placeholder="상품명을 입력해주세요"/>
      </div>
      <div className="inputBlock largeInputBlock">
          <label htmlFor="productDescription">상품 소개</label>
          <input id="productDescription" type="text" placeholder="상품 소개를 입력해주세요"/>
      </div>
      <div className="inputBlock">
          <label htmlFor="productDescription">판매가격</label>
          <input id="productDescription" type="text" placeholder="판매가격을 입력해주세요"/>
      </div>
      <div className="inputBlock">
          <label htmlFor="productDescription">태그</label>
          <input id="productDescription" type="text" placeholder="태그를 입력해주세요"/>
      </div>
    </div>
  );
}

export default AddItemPage;
