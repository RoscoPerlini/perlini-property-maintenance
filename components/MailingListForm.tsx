"use client";
import { usePost } from "@/app/hooks/usePost";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function MailingListForm({
  placeholder,
  buttonText,
  theme,
}: {
  placeholder: string;
  buttonText: string;
  theme: "dark" | "light";
}) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [fromEmail, setFromEmail] = useState("");
  const { postRequest } = usePost();
  const [formSent, setFormSent] = useState("");

  // function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
  //   setEmail(event.target.value);
  // }

  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
  //     setIsEmailValid(false);
  //   } else {
  //     setIsEmailValid(true);
  //     // alert(`Thank you for subscribing with ${email}`);
  //     setEmail("");

  //     const sendForm = async () => {
  //       try {
  //         const formData = {
  //           to: "sbloxy123@gmail.com", // Change to your recipient
  //           from: "sbloxy123@gmail.com", // Change to your verified sender
  //           subject: `Newsletter signup`,
  //           email: fromEmail,
  //           html: `
  //             NEW NEWSLETTER SUBSCRIBER!
  //             <br /><br />
  //             A subscriber with email ${fromEmail} has subscribed to receive newsletters from you.  Please add them to your mailing list
  //             `,
  //         };
  //         // Local developer testing API Route
  //         await postRequest("/api/sendgrid", formData);
  //         const formMessageText = new Promise((resolve, reject) => {
  //           setTimeout(() => {
  //             setFormSent("You're subscribed!");
  //             setTimeout(() => {
  //               setFormSent("");
  //               setFromEmail("");
  //             }, 5000);
  //           }, 0);
  //         });
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     sendForm();
  //   }
  // }

  //

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className={` ${
        theme == "dark" && "small:mx-auto"
      } flex flex-col justify-center w-full gap-8 xsmall:gap-4 xsmall:flex-row small:w-fit`}
      // onSubmit={handleSubmit}
      onSubmit={handleSubmit(() => {
        const sendForm = async () => {
          try {
            const formData = {
              to: "info@perlini.co.uk", // Change to your recipient
              from: "info@perlini.co.uk", // Change to your verified sender
              subject: `Newsletter signup`,
              email: fromEmail,
              html: `
              NEW NEWSLETTER SUBSCRIBER!
              <br /><br />
              A subscriber with email ${fromEmail} has subscribed to receive newsletters from you.  Please add them to your mailing list
              `,
            };
            // Local developer testing API Route
            await postRequest("/api/sendgrid", formData);
            const formMessageText = new Promise((resolve, reject) => {
              setTimeout(() => {
                setFormSent("Message Sent!");
                setTimeout(() => {
                  setFormSent("");
                  setFromEmail("");
                }, 5000);
              }, 0);
            });
          } catch (error) {
            console.log(error);
          }
        };
        sendForm();
      })}
    >
      <div className="relative">
        <div className="button__link__bg__block">
          {/*  */}

          {/* small */}
          <svg
            className={`button__link__svg button__link__svg__small -z-0  ${
              theme == "dark"
                ? "fill-theme-dark opacity-[6%]"
                : "fill-white opacity-20"
            }  `}
            preserveAspectRatio="none"
            viewBox="0 0 175 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M173.229 1V43.2227L162.849 49H1.54785V6.74023L11.8662 1H173.229Z"
              stroke="none"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* 200 */}
          <svg
            className={`button__link__svg button__link__svg__200 -z-0 ${
              theme == "dark"
                ? "fill-theme-dark opacity-[6%]"
                : "fill-white opacity-20"
            }   `}
            preserveAspectRatio="none"
            viewBox="0 0 211 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M209.389 1.5V43.7178L198.82 49.5H1.38867V7.24512L11.8936 1.5H209.389Z"
              stroke="none"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* 300 */}
          <svg
            className={`button__link__svg button__link__svg__300  -z-0  ${
              theme == "dark"
                ? "fill-theme-dark opacity-[6%]"
                : "fill-white opacity-20"
            }  `}
            preserveAspectRatio="none"
            viewBox="0 0 311 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M310 1V43.2256L299.739 49H1V6.73828L11.2617 1H310Z"
              stroke="none"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* 400 */}
          <svg
            className={`button__link__svg button__link__svg__400  -z-0  ${
              theme == "dark"
                ? "fill-theme-dark opacity-[6%]"
                : "fill-white opacity-20"
            }  `}
            preserveAspectRatio="none"
            viewBox="0 0 401 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M400 1V43.2295L389.876 49H1V6.73828L11.2617 1H400Z"
              stroke="none"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* 500 */}
          <svg
            className={`button__link__svg button__link__svg__500   -z-0  ${
              theme == "dark"
                ? "fill-theme-dark opacity-[6%]"
                : "fill-white opacity-20"
            }  `}
            preserveAspectRatio="none"
            viewBox="0 0 512 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M510.275 1V43.2178L499.707 49H1V6.74512L11.5049 1H510.275Z"
              stroke="none"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/*  */}
        </div>

        <input
          id="email"
          type="email"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
          placeholder={placeholder}
          value={fromEmail}
          onChange={(e) => setFromEmail(e.target.value)}
          className={`relative p-4 ${
            theme == "dark"
              ? "bg-transparent bg-opacity-[6%] placeholder:text-theme-dark placeholder:text-opacity-80 placeholder:font-[400]"
              : "bg-transparent bg-opacity-20 placeholder:text-white focus:text-theme-purple"
          }   rounded-sm w-full placeholder:uppercase font-headings text-[14.5px] tracking-[0.06em] xsmall:w-[290px]  placeholder:font-[500] placeholder:text-center xsmall:text-left xsmall:placeholder:text-left xsmall:placeholder:pl-[1rem] h-[4.8rem] focus:bg-white border-0 focus:ring-0 focus:outline-none transition duration-300 ease-out`}
          style={{}}
        />
      </div>
      <button
        type="submit"
        className={`${
          theme == "dark" ? "text-white" : "text-theme-purple "
        } w-full button__link__extra relative rounded-sm cursor-pointer font-headings h-[4.8rem] font-[600] p-4 uppercase text-[14.5px] tracking-[0.06em] xsmall:w-[114px]`}
      >
        <div className="button__link__bg__block">
          {/* small */}

          <svg
            className={`button__link__svg button__link__svg__small -z-0 duration-300 ${
              theme == "dark" ? "fill-theme-purple" : " fill-white"
            }`}
            preserveAspectRatio="none"
            viewBox="0 0 175 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M173.229 1V43.2227L162.849 49H1.54785V6.74023L11.8662 1H173.229Z"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className={`duration-300`}
            />
          </svg>

          {/* 200 */}
          <svg
            className={`button__link__svg button__link__svg__200 -z-0 duration-300 ${
              theme == "dark" ? "fill-theme-purple" : " fill-white"
            }`}
            preserveAspectRatio="none"
            viewBox="0 0 211 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M209.389 1.5V43.7178L198.82 49.5H1.38867V7.24512L11.8936 1.5H209.389Z"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className={` duration-300`}
            />
          </svg>

          {/* 300 */}
          <svg
            className={`button__link__svg button__link__svg__300 -z-0 duration-300 ${
              theme == "dark" ? "fill-theme-purple" : " fill-white"
            }`}
            preserveAspectRatio="none"
            viewBox="0 0 311 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M310 1V43.2256L299.739 49H1V6.73828L11.2617 1H310Z"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className={` duration-300`}
            />
          </svg>

          {/* 400 */}
          <svg
            className={`button__link__svg button__link__svg__400 -z-0 duration-300 ${
              theme == "dark" ? "fill-theme-purple" : " fill-white"
            }`}
            preserveAspectRatio="none"
            viewBox="0 0 401 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M400 1V43.2295L389.876 49H1V6.73828L11.2617 1H400Z"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className={` duration-300`}
            />
          </svg>

          {/* 500 */}
          <svg
            className={`button__link__svg button__link__svg__500 -z-0 duration-300 ${
              theme == "dark" ? "fill-theme-purple" : " fill-white"
            }`}
            preserveAspectRatio="none"
            viewBox="0 0 512 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M510.275 1V43.2178L499.707 49H1V6.74512L11.5049 1H510.275Z"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className={` duration-300`}
            />
          </svg>
        </div>

        <span className="relative">{buttonText}</span>
      </button>
      <p
        className={`${formSent ? "block" : "hidden"} text-white text-center absolute top-0 left-0 w-full h-full bg-theme-dark bg-opacity-70 flex justify-center items-center`}
      >
        {formSent}
      </p>
    </form>
  );
}
