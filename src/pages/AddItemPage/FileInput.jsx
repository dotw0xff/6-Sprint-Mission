import { useEffect, useRef, useState } from "react";
import placeholderImg from "../../assets/placeholder.svg";
import "./FileInput.css";

function FileInput({ className = "", name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className="FileInput">
      <img className="FileRegister" src={placeholderImg} alt="이미지 등록" />
      <input
        className="FileinputHiddenOverlay"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleChange}
        ref={inputRef}
      />
      {preview && (
        <img className="FileinputPreview" src={preview} alt="이미지 미리보기" />
      )}
      {value && (
        <button className="FileinputClearButton" onClick={handleClearClick}>
          X
        </button>
      )}
    </div>
  );
}

export default FileInput;
