import { cx } from "class-variance-authority";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { Link } from "wouter";
import { navigate } from "wouter/use-location";

export function ActionsList() {
  function handleClick() {
    Cookies.remove("password");
    Cookies.remove("username");

    navigate("/");
    toast("Logout Success!", { theme: "dark", autoClose: 2500 });
  }

  return (
    <div className="space-x-3 flex justify-center items-center mt-6">
      <button
        type="button"
        className={cx(
          "bg-red-500 text-lg hover:bg-red-600",
          "text-white transition-all",
          "px-4 py-1.5 rounded-md font-semibold"
        )}
        onClick={handleClick}
        aria-label="logout"
      >
        Logout
      </button>
      <Link to="/saved-results">
        <button
          type="button"
          className={cx(
            "bg-blue-600 text-lg px-4 py-1.5",
            "hover:bg-blue-700",
            "text-white font-semibold rounded-md"
          )}
          aria-label="go to saved results"
        >
          Saved Results
        </button>
      </Link>
    </div>
  );
}
