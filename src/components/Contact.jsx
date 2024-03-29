import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.webp";
import github from "../assets/github.png";
import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../App";

const Contact = () => {
  const { scrollToBottom, setScrollToBottom } = useContext(ScrollContext);
  const contactRef = useRef(null);

  useEffect(() => {
    if (scrollToBottom) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToBottom(false); // Reset the state after scrolling
    }
  }, [scrollToBottom, setScrollToBottom]);

  return (
    <div
      className="mx-auto my-auto bg-slate-700 flex flex-col align-center p-8 h-[90vh]"
      ref={contactRef}
    >
      <div className="mx-auto">
      <div className="text-2xl md:text-3xl font-bold primary-color mt-2 mb-14 flex w-11/12 justify-center text-center">
        Conatact Me
      </div>
      <div>
        <form action="https://formspree.io/f/xgegnzwj" method="POST"  className="flex flex-col sm:w-11/12 md:w-96">
          <input type="text" name="name" placeholder="name" autoComplete="off" required className="mb-6 rounded-md p-2 w-full focus:outline-none bg-slate-700 border-2 text-white border-slate-100 "/>
          <input type="email" name="email" placeholder="email" autoComplete="off" required className="mb-6 rounded-md p-2 w-full focus:outline-none bg-slate-700 border-2 text-white border-slate-100 "/>
          <textarea name="text" cols="30" rows="6" placeholder="your message" autoComplete="off" required className="mb-6 rounded-md w-full p-2 focus:outline-none bg-slate-700 border-2 text-white border-slate-100 "></textarea>
          <input type="submit" value="Submit" className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none cursor-pointer" />
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
