import css from "./Options.module.css";

export default function Options({ updateFeedback, totalFeedback }) {
  const hendleFeedback = () => {
    updateFeedback("good", 0);
    updateFeedback("neutral", 0);
    updateFeedback("bad", 0);
  };
  return (
    <div className={css.buttonsBlock}>
      <button className={css.button} onClick={() => updateFeedback("good")}>
        good
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>
        bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={hendleFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
