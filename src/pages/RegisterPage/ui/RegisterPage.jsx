import { RegisterHeader } from "../../../entities";
import { ImageList } from "../../../widgets/ImageList";
import { ItemInput } from "../../../entities/ItemInput";
import { useEffect, useState } from "react";

import "./RegisterPage.scss";
import { TagList } from "../../../entities/TagList";
import {
  FORM_DATA,
  PLACEHOLDER_LIST_FOR_REGISTER,
} from "../../../shared/constants/constants";

const tagPlaceholder =
  PLACEHOLDER_LIST_FOR_REGISTER[PLACEHOLDER_LIST_FOR_REGISTER.length - 1];

export function RegisterPage() {
  const [tags, setTags] = useState(null);
  const [file, setFile] = useState(FORM_DATA);

  const active =
    file.title && file.description && file.price && file.image && file.tags;

  const handleDelete = (value) => {
    setTags((prevTags) =>
      prevTags.length == 1 ? null : prevTags.filter((v) => v !== value)
    );
  };

  const handleChange = (name, value) => {
    setFile((prevFile) => ({
      ...prevFile,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file);
  };

  useEffect(() => {
    setFile((prevFile) => ({
      ...prevFile,
      tags,
    }));
  }, [tags]);

  return (
    <>
      <main className="register">
        <form className="register__content" onSubmit={handleSubmit}>
          <RegisterHeader active={active} />
          <ImageList onChange={setFile} />
          <div className="register__inputList">
            {PLACEHOLDER_LIST_FOR_REGISTER.map(
              (list, index) =>
                index !== PLACEHOLDER_LIST_FOR_REGISTER.length - 1 && (
                  <ItemInput
                    name={list.name}
                    value={list.value}
                    placeholder={list.placeholder}
                    type={list.type}
                    key={index}
                    onChange={handleInputChange}
                  />
                )
            )}
            <div className="register__Tags">
              <ItemInput
                name={tagPlaceholder.name}
                value={tagPlaceholder.value}
                placeholder={tagPlaceholder.placeholder}
                type={tagPlaceholder.type}
                key={-1}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const newValue = {
                      id: crypto.randomUUID(),
                      value: e.target.value,
                    };
                    e.target.value = "";
                    setTags((prevTag) =>
                      prevTag ? [...prevTag, newValue] : [newValue]
                    );
                  }
                }}
              ></ItemInput>
              <TagList tags={tags} onDelete={handleDelete} />
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
