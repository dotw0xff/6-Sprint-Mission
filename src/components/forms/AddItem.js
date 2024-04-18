import Button, { SubmitButton } from "components/commons/Button";
import { ImageInput } from "components/commons/ImageBlock";
import styles from "styles/forms.module.scss";
import {
  FormInput,
  FormTextarea,
  NumberInput,
  TagInput,
} from "components/commons/Inputs";
import { useEffect, useState } from "react";
import { removeCommas } from "utils/commas";
import Tag from "components/commons/Tag";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export default function AddItemForm() {
  const [imgFile, setImgFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [currentTag, setCurrentTag] = useState("");
  const [tagList, setTagList] = useState([]);
  const [isActivate, setIsActivate] = useState(false);

  const onChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "img-file") setImgFile(files[0]);
    if (name === "title") setTitle(value);
    if (name === "description") setDescription(value);
    if (name === "price") setPrice(Number(removeCommas(e.target.value)));
    if (name === "tags") setCurrentTag(value);
  };

  const handleTagKeyUp = (e) => {
    if (e.keyCode !== 13 || e.target.value.trim() === "") return;
    if (tagList.includes(currentTag)) {
      alert("같은 태그가 있습니다");
      return;
    }
    setTagList((prev) => [...prev, currentTag]);
    setCurrentTag("");
  };

  const handleTagDelete = (tagToDelete) => {
    setTagList((prev) => prev.filter((tag) => tag !== tagToDelete));
  };

  useEffect(() => {
    if (
      title !== "" &&
      description !== "" &&
      price !== 0 &&
      tagList.length > 0 &&
      imgFile !== null
    ) {
      setIsActivate(true);
    } else {
      setIsActivate(false);
    }
  }, [title, description, price, tagList, imgFile]);

  return (
    <div className={styles.add__item}>
      <header className={styles.header}>
        <h1>상품 등록하기</h1>
        <SubmitButton className={cn({ [styles.activate]: isActivate })}>
          등록
        </SubmitButton>
      </header>

      <form className={styles.add__item__form}>
        <div className={styles.form__image}>
          <h1>상품 이미지</h1>
          <ImageInput name="img-file" value={imgFile} onChange={onChange} />
        </div>

        <div className={styles.form__title}>
          <h1>상품명</h1>
          <FormInput
            name="title"
            placeholder="상품명을 입력해주세요"
            value={title}
            onChange={onChange}
          />
        </div>

        <div className={styles.form__description}>
          <h1>상품 소개</h1>
          <FormTextarea
            name="description"
            placeholder="상품 소개를 입력해주세요"
            content={description}
            onChange={onChange}
          />
        </div>

        <div className={styles.form__price}>
          <h1>판매 가격</h1>
          <NumberInput
            name="price"
            placeholder="판매 가격을 입력해주세요"
            value={price}
            onChange={onChange}
          />
        </div>

        <div className={styles.form__tags}>
          <h1>태그</h1>
          <TagInput
            name="tags"
            placeholder="태그를 입력해주세요"
            value={currentTag}
            onChange={onChange}
            onKeyUp={handleTagKeyUp}
          />
          <div className={styles.tag__list}>
            {tagList.reverse().map((tag) => (
              <Tag key={tag} onDelete={() => handleTagDelete(tag)}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
