import styles from "./DirectAnswer.module.css";

interface DirectAnswerProps {
  question: string;
  answer: string;
  keyTakeaways?: string[];
}

export function DirectAnswer({
  question,
  answer,
  keyTakeaways = [],
}: DirectAnswerProps) {
  return (
    <section className={styles.section} aria-label="Direct Definition and Overview">
      <div className="container">
        <div className={styles.answerCard}>
          <div className={styles.header}>
            <span className={styles.badge}>Executive Summary &amp; Direct Answer</span>
            <h2 className={styles.questionHeading}>{question}</h2>
          </div>
          <p className={styles.answerText}>{answer}</p>

          {keyTakeaways.length > 0 && (
            <div className={styles.takeawaysBox}>
              <h3 className={styles.takeawaysTitle}>Core Implementation Takeaways</h3>
              <ul className={styles.takeawaysList}>
                {keyTakeaways.map((item, idx) => (
                  <li key={idx} className={styles.takeawayItem}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
