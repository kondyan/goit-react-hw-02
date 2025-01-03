import css from "./Options.module.css";

const Options = ({ values, onClickFunction, totalFeedback }) => {
  return (
    <>
      <ul className={css.btnList}>
        <button onClick={() => onClickFunction("good")}>Good</button>
        <button onClick={() => onClickFunction("neutral")}>Neutral</button>
        <button onClick={() => onClickFunction("bad")}>Bad</button>
        {totalFeedback > 0 && (
          <button onClick={() => onClickFunction("reset")}> Reset</button>
        )}
      </ul>
    </>
  );
};

export default Options;
