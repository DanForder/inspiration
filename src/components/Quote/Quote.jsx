import { useMemo } from "react";
import "./_Quote.scss";

const Quote = ({ text, author }) => {
  const currentQuote = useMemo(() => {
    return text && author ? (
      <>
        <q className="quote__content">{text}</q>
        <footer className="quote__author">{author ?? "Anonymous"}</footer>
      </>
    ) : (
      <p>Are you ready to be inspired?</p>
    );
  }, [author, text]);

  return <blockquote className="quote">{currentQuote}</blockquote>;
};

export default Quote;
