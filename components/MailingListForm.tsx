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
        className={`p-4 ${
          theme == "dark"
            ? "bg-theme-dark bg-opacity-[6%] placeholder:text-theme-dark placeholder:text-opacity-80 placeholder:font-[400]"
            : "bg-white bg-opacity-20 placeholder:text-white focus:text-theme-purple"
        }   rounded-sm w-full placeholder:uppercase font-headings text-[14.5px] tracking-[0.06em] xsmall:w-[290px]  placeholder:font-[500] placeholder:text-center xsmall:text-left xsmall:placeholder:text-left xsmall:placeholder:pl-[1rem] h-[4.8rem] focus:bg-white border-0 focus:ring-0 focus:outline-none transition duration-300 ease-out`}
        style={{}}
      />
      <button
        type="submit"
        className={`w-full  ${
          theme == "dark"
            ? "text-white bg-theme-purple"
            : "text-theme-purple bg-white"
        }  rounded-sm cursor-pointer font-headings h-[4.8rem] font-[600] p-4 uppercase text-[14.5px] tracking-[0.06em] xsmall:w-[114px]`}
      >
        {buttonText}
      </button>
      <p
        className={`${formSent ? "block" : "hidden"} text-white text-center absolute top-0 left-0 w-full h-full bg-theme-dark bg-opacity-70 flex justify-center items-center`}
      >
        {formSent}
      </p>
    </form>
  );
}
