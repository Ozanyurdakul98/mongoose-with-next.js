import dbConnect from "../lib/dbConnect";
import Question from "../models/Question";
import QuestionCard from "../components/QuestionCard";

export async function getServerSideProps() {
  async function getAllQuestion() {
    await dbConnect();
    const questions = await Question.find();
    const sanatizedQuestions = questions.map((question) => ({
      id: question.id,
      question: question.question,
      answer: question.answer,
      options: question.options,
    }));
    return sanatizedQuestions;
  }

  const questions = await getAllQuestion();
  return {
    props: { questions: questions },
  };
}

export default function Home({ questions }) {
  return (
    <main>
      <h1>All questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question.question}
            answer={question.answer}
            options={question.options}
          />
        ))}
      </ul>
    </main>
  );
}
