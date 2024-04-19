import { useRef, useState } from "react";
import icoX from "../img/ic_x.svg";


export function TagInput ({name, onChange}) {
  const [tagArr, setTagArr] = useState([]);
  const tagInput = useRef();

  const handleChange = (e) => {
    if(e.target.value === "") setTagArr([]);
    else {
      setTagArr(e.target.value.split(","));
      onChange(name, tagArr);
    }
    
  }

  const handleDelete = (e) => {
    const nextTagArr = tagArr.filter((el, index) => index !== Number(e.target.value));
    
    setTagArr(nextTagArr);
    onChange(name, nextTagArr);

    tagInput.current.value = tagArr.filter((el, index) => index !== Number(e.target.value)).join(",");
  }
  return (
    <div className="tag-view">
      <input onChange={handleChange} ref={tagInput} className="input-theme" placeholder="태그를 입력해주세요"/>
      <ul className="tag-container">
        {
          tagArr.map((tag, index) => {
            return (
            <li key={index} className="tag-view__list">
              <span className="tag-view__txt">{tag}</span>
              <button type="button" value={index} onClick={handleDelete} className="tag-view__btn">
                <img src={icoX} alt="아이콘" aria-hidden="true"/> 
              </button>
            </li>)
          })
        }
      </ul>
    </div>

  );
}