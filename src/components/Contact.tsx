import { IconMail, IconMap, IconPlugConnected } from "@tabler/icons-react";

import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: object) => {
    console.log(data);
    // Here you can handle the form submission, e.g., send the data to a server
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  mx-6 gap-5 ">
      <div className="col-span-2 lg:col-span-3">
        <h3 className="text-3xl font-bold text-dark-100">Leave us your info</h3>
        <form
          className="bg-[#fff] px-7 py-5 flex flex-col gap-y-6 mt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-y-2">
            <label
              className="text-dark-500 text-lg font-medium"
              htmlFor="fullName"
            >
              Your Full Name
            </label>
            <input
              type="text"
              className="bg-light-100 text-dark-100 h-11 px-2"
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              className="text-dark-500 text-lg font-medium"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              className="bg-light-100 text-dark-100 h-11 px-2"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              className="text-dark-500 text-lg font-medium"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              className="bg-light-100 text-dark-100 h-11 px-2"
              {...register("subject")}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="message"
              className="text-dark-500 text-lg font-medium"
            >
              Your Message
            </label>
            <textarea
              id="message"
              className="bg-light-100 text-dark-100 p-2"
              cols={30}
              rows={10}
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <div className="bg-primary flex items-center justify-center h-10">
            <button type="submit" className="text-sm font-semibold uppercase">
              Send message
            </button>
          </div>
        </form>
      </div>
      <div className="col-span-2 lg:col-span-2 max-sm:mt-7">
        <h3 className="text-3xl font-bold text-dark-100">
          Contact information
        </h3>
        <div className="mt-10 space-y-9 ">
          <div className="flex flex-col items-center p-7 justify-between  lg:h-52  bg-[#fff]">
            <div className="bg-primary rounded-full h-10 aspect-square flex items-center justify-center">
              <IconMap />
            </div>
            <ul className="flex flex-col w-full gap-y-3 text-dark-500">
              <li className="flex items-center justify-between">
                <p>Country:</p>
                <p>Bangladesh</p>
              </li>
              <li className="flex items-center justify-between">
                <p>City:</p>
                <p>Dhaka</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Streat:</p>
                <p>Bangla35 vhatara, Baddadesh</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center p-7 justify-between h-52 bg-[#fff]">
            <div className="bg-primary rounded-full h-10 aspect-square flex items-center justify-center">
              <IconMail />
            </div>
            <ul className="flex flex-col w-full gap-y-3 text-dark-500">
              <li className="flex items-center justify-between">
                <p>Email:</p>
                <p>youremail@gmail.com</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Skype:</p>
                <p>@yourusername</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Telegram:</p>
                <p>@yourusername</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center p-7 justify-between h-52 bg-[#fff]">
            <div className="bg-primary rounded-full h-10 aspect-square flex items-center justify-center">
              <IconPlugConnected />
            </div>
            <ul className="flex flex-col w-full gap-y-3 text-dark-500">
              <li className="flex items-center justify-between">
                <p>Support services:</p>
                <p>15369</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Office:</p>
                <p>+58 (021)356 587 235</p>
              </li>
              <li className="flex items-center justify-between">
                <p>Personal:</p>
                <p>+58 (021)356 587 235</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
