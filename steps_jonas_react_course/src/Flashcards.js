import { useState } from "react";

const questions = [
  { id: 234, question: "asdfsfda 1", answer: "useState hook is the answer" },
  {
    id: 234122,
    question: "asdfs222fda 1",
    answer: "2222useState hook is the answer",
  },
  {
    id: 2341223,
    question: "asdfsfda 13333sdf",
    answer: "useState 333hook is the answer",
  },
  {
    id: 23124214,
    question: "asdfsfda sdfasf 12123221311",
    answer: "useState ho4444jok is the answer",
  },
  {
    id: 2122234,
    question: "asdfsfda another qauest1",
    answer: "useState hook i55555s the answer",
  },
  {
    id: 12234,
    question: "asdfsfda 12311",
    answer: "useState hook is th 6666e answer",
  },
];

export default function FlashCards() {
  const [selectedId, setSelectedId] = useState(12234);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
