import { useRef } from "react";

export default function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  function confirmHancdler(e) {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;
  }

  return (
    <div>
      <h1>Home Page!</h1>

      <form onClick={confirmHancdler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input id="email" type="email" ref={emailRef} />
        </div>

        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea type="text" rows="4" ref={feedbackRef}></textarea>
        </div>

        <button>Send Feedback</button>
      </form>
    </div>
  );
}
