import { ChangeEvent, useState } from "react";

interface UserData {
  phoneNumber: string;
  email: string;
  password: string;
}

export default function Signup() {
  const [formData, setFormData] = useState<UserData>({
    phoneNumber: "",
    password: "",
    email: "",
  });
  const [passConf, setPassConf] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePassConf = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassConf(value);
  };

  return (
    <section className="stack h-screen space-y-4">
      <a href="/" className="text-xl font-semibold">
        eShop
      </a>
      <div className="col w-[40%] space-y-3 rounded-lg border border-gray-300 p-8">
        <h2 className="font-montserrat text-2xl font-semibold">Sign Up</h2>
        <form className="col space-y-4">
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            className="input w-full"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password2"
            className="input w-full"
            placeholder="Confirm Password"
            value={passConf}
            onChange={handlePassConf}
          />

          <div className="text-sm">
            By continuing, you agree with eShop's{" "}
            <a href="/terms" className="text-blue-500">
              terms of use
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" className="text-blue-500">
              privacy policy
            </a>
            .
          </div>
          <button type="submit" className="btn w-full bg-blue-700 text-white">
            Sign Up
          </button>
        </form>
      </div>
      <div className="pt-8"></div>
      <p>Already Have an Account?</p>
      <a
        href="/auth/sign-up"
        className="btn w-[40%] rounded-lg border border-gray-300 text-center"
      >
        Login
      </a>
    </section>
  );
}
