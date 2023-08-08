import { zodResolver } from "@hookform/resolvers/zod";
import { cx } from "class-variance-authority";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { Link } from "wouter";
import { navigate } from "wouter/use-location";
import { registerSchema } from "~/lib/utils/schemas";
import { Heading, Paragraph } from "../atoms";
import AES from "crypto-js/aes";

export function RegisterForm() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  function onSubmit() {
    Cookies.set(
      "username",
      AES.encrypt(getValues("username"), "username").toString(),
      {
        expires: 7,
      }
    );
    Cookies.set(
      "password",
      AES.encrypt(getValues("password"), "password").toString(),
      { expires: 7 }
    );
    Cookies.set(
      "registered-account",
      AES.encrypt(
        getValues("username") + getValues("password"),
        "registered-account"
      ).toString(),
      { expires: 7 }
    );

    navigate("/");
  }

  return (
    <div>
      <form
        className="bg-[#161B22] rounded-md p-4 w-[30rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading className="text-white text-center">Register</Heading>
        <div className="space-y-3 mt-5">
          <div className="flex flex-col">
            <label
              className="text-gray-100 text-lg font-medium"
              htmlFor="username"
            >
              Username
            </label>
            <input
              placeholder="Your username...."
              {...register("username")}
              className={cx(
                "outline-none transition-all rounded-sm",
                "px-3 py-1.5 my-1 bg-gray-800 text-white",
                "focus:ring-2 focus:ring-blue-600"
              )}
              type="text"
              name="username"
            />
            {errors.username ? (
              <Paragraph size="normal" intent="light">
                {errors.username.message}
              </Paragraph>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label className="text-gray-100 text-lg" htmlFor="password">
              Password
            </label>
            <input
              placeholder="Your password...."
              {...register("password")}
              className={cx(
                "outline-none transition-all rounded-sm",
                "px-3 py-1.5 my-1 bg-gray-800 text-white",
                "focus:ring-2 focus:ring-blue-600"
              )}
              type="password"
              name="password"
            />
            {errors.password ? (
              <Paragraph size="normal" intent="light">
                {errors.password.message}
              </Paragraph>
            ) : null}
          </div>
        </div>
        <button
          type="submit"
          aria-label="submit"
          className={cx(
            "bg-blue-600 mt-6 w-full transition-all",
            "px-4 py-1.5 rounded-md font-bold text-white",
            "hover:bg-blue-700"
          )}
        >
          Submit!
        </button>
      </form>
      <div className="text-center mt-3">
        <Link
          to="/login"
          className="text-gray-100 font-semibold hover:underline hover:underline-offset-4 decoration-dashed"
        >
          Already have an account? Login.
        </Link>
      </div>
    </div>
  );
}
