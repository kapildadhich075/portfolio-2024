import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = `mailto:kapildadhich075@gmail.com?subject=${formData.subject}&body=HI, name is ${formData.name}. ${formData.message}
  //   ( ${formData.email})`;
  // };

  const onSubmit = (data) => {
    window.location.href = `mailto:kapildadhich075@gmail.com?subject=${data.subject}&body=HI, name is ${data.name}. ${data.message} ( ${data.email})`;
    reset();
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mt-6 overflow-hidden bg-white rounded-xl">
        {" "}
        <div className="px-6 py-12 sm:p-12">
          {" "}
          <h3 className="text-3xl font-semibold text-center text-gray-900">
            Send us a message
          </h3>{" "}
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            className="mt-14"
          >
            {" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
              {" "}
              <div>
                {" "}
                <label className="text-base font-medium text-gray-900">
                  {" "}
                  Name{" "}
                </label>{" "}
                <div className="mt-2.5 relative">
                  {" "}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="John Doe"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    {...register("name", { required: true })}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="text-base font-medium text-gray-900">
                  {" "}
                  Email address{" "}
                </label>{" "}
                <div className="mt-2.5 relative">
                  {" "}
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="johndoe@gmail.com"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    {...register("email", { required: true })}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="text-base font-medium text-gray-900">
                  {" "}
                  Phone number{" "}
                </label>{" "}
                <div className="mt-2.5 relative">
                  {" "}
                  <input
                    type="tel"
                    name=""
                    id=""
                    placeholder="+1 123 456 7890"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    {...register("phone", { required: true })}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="text-base font-medium text-gray-900">
                  {" "}
                  Subject{" "}
                </label>{" "}
                <div className="mt-2.5 relative">
                  {" "}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Subject"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    {...register("subject", { required: true })}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="sm:col-span-2">
                {" "}
                <label className="text-base font-medium text-gray-900">
                  {" "}
                  Message{" "}
                </label>{" "}
                <div className="mt-2.5 relative">
                  {" "}
                  <textarea
                    name=""
                    id=""
                    placeholder="message"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                    {...register("message", { required: true })}
                    rows="4"
                  ></textarea>{" "}
                </div>{" "}
              </div>{" "}
              <div className="sm:col-span-2">
                {" "}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                >
                  {" "}
                  Send{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </form>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Contact;
