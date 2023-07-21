import { zodResolver } from "@hookform/resolvers/zod";
import { cx } from "class-variance-authority";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { navigate } from "wouter/use-location";
import { VITE_PASSWORD, VITE_USERNAME } from "~/lib/utils/constants";
import { loginSchema } from "~/lib/utils/schemas";
import { Heading, Paragraph } from "../atoms";
import { Link } from "wouter";

export function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  function onSubmit() {
    if (
      Cookies.get("password") === VITE_PASSWORD &&
      Cookies.get("username") === VITE_USERNAME
    ) {
      navigate("/");
      toast("Login success!", { theme: "dark", autoClose: 2500 });
      return;
    }

    toast(
      Cookies.get("password") !== VITE_PASSWORD &&
        Cookies.get("username") !== VITE_USERNAME
        ? "Wrong password and username! Please input the correct username and password"
        : Cookies.get("username") !== VITE_USERNAME
        ? "Wrong username! Please input the correct username"
        : "Wrong password! Please input the correct password!",
      { theme: "dark", autoClose: 2500 }
    );
  }

  return (
    <div>
      <form
        className="bg-[#161B22] rounded-md p-4 w-[30rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading className="text-white text-center">Login</Heading>
        <div className="space-y-3 mt-5">
          <div className="flex flex-col">
            <label
              className="text-gray-100 text-lg font-medium"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username")}
              placeholder="Your username...."
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
              {...register("password")}
              placeholder="Your password...."
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
          to="/register"
          className="text-gray-100 font-semibold hover:underline hover:underline-offset-4 decoration-dashed"
        >
          Not yet registered?
        </Link>
      </div>
    </div>
  );
}
