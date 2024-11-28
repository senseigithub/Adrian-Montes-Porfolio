import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TextSpan from "../utils/textSpan";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";


const EmailForm = () => {
  const name = "Let's get in touch!".split("");

  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          setSending(false);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          setSending(false);
          setError(true);
        }
      );
  };

  return (
    <section>
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen gap-4 mx-5"
        variants={fadeIn("down", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        {/*title*/}
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-v">
            {name.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </div>
          <p className="text-sm text-center md:text-md lg:text-lg text-neutral-800">
            Leave your details and a short message below
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          {/*container*/}
          <div className="w-full mx-auto bg-gray-100 rounded-lg shadow-lg p-7">
            {/*name and email*/}
            <div className="flex flex-col md:flex-row md:justify-between md:gap-4">
              <div className="flex flex-col">
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full h-12 p-5 mb-2 font-light rounded-lg md:h-14 placeholder:text-sm placeholder:opacity-80 placeholder:italic focus:outline-v"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full h-12 p-5 mb-2 font-light rounded-lg md:h-14 placeholder:text-sm placeholder:opacity-80 placeholder:italic focus:outline-v"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full">
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  className="w-full p-5 mb-3 font-light rounded-lg md:h-48 placeholder:text-sm placeholder:opacity-80 placeholder:italic focus:outline-v "
                  placeholder="What would you like to ask me?"
                  rows={3}
                  required
                />
              </div>
              <button
                type="submit"
                value="Send"
                className="w-full py-2 text-sm font-semibold text-white border-b-4 rounded-full bg-v hover:bg-vBtnHover border-vBtnHover hover:border-v"
                disabled={sending}
              >
                {sending ? "Sending Message..." : "Send Message"}
              </button>
              {sent && <p className="mt-2 text-green-500">Sent with succes!</p>}
              {error && (
                <p className="mt-2 text-red-500">
                  Error sending message. Try later!
                </p>
              )}
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default EmailForm;
