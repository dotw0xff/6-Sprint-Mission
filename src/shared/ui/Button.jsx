import "./Button.scss";

/**
 * props의 classNames이라는 Array 안에 className들을 넣으면 해당 css가 작동한다.
 * @param {Object}{Array} classNames
 * @param {Object}{string} value
 * @returns blueButton
 */
export const Button = ({ classNames, value, active = true, onClick }) => {
  return (
    <button
      disabled={!active}
      onClick={onClick}
      className={"button " + classNames.join(" ")}
    >
      {value}
    </button>
  );
};