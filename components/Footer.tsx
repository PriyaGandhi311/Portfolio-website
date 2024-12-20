import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

interface SendEmailProps {
  emailFrom: string;
  body: string;
}

const sendEmail = ({ emailFrom, body }: SendEmailProps) => {
  const email_body = encodeURIComponent(body);
  const email_From = encodeURIComponent(emailFrom);
  const email = document.createElement("a");
  email.href = `mailto:pgandhi4@ncsu.edu?from=${email_From}&body=${email_body}`;
  email.click();
};

const ContactForm = () => {
  const email_From = (document.getElementById("your_email") as HTMLInputElement)
    ?.value;
  const email_body = (
    document.getElementById("your_message") as HTMLInputElement
  )?.value;
  if (!email_From || !email_body) {
    alert("Please fill out both the email and message fields.");
    return;
  }

  sendEmail({ emailFrom: email_From, body: email_body });
};
const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <span className="text-purple">Reach out</span> to me
        </h1>
        <div className="relative z-10 flex flex-col items-center">
          <form>
            <input
              className="w-full p-2 mt-8 border rounded-md"
              type="email"
              id="your_email"
              placeholder="Your Email"
            ></input>
            <textarea
              className="w-full p-2 mt-4 border rounded-md"
              id="your_message"
              placeholder="Your Message"
            ></textarea>
          </form>
          {/* <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p> */}
          <a id="send_email">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={ContactForm}
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Priya Gandhi
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Social media icon for ${info.id}`}
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
