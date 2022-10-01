import Button from "../components/Button";
import { Input } from "../components/Input";
import { Layout } from "../components/Layout";
import axios, { AxiosError } from "axios";
import { useState, ChangeEvent } from "react";

function SignupPage() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <Layout>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const res = await axios.post(
              "http://localhost:3000/signup",
              credentials
            );
            console.log(res);
          } catch (error) {
            if (error instanceof AxiosError) {
              setErrors(error.response?.data.message);
            }
          }
        }}
      >
        {errors.map((error) => (
          <p
            className="bg-red-900 text-slate-200 mb-1 px-2 py-1 rounded-sm"
            key={error}
          >
            {error}
          </p>
        ))}
        <Input
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <Button>Sign Up</Button>
      </form>
    </Layout>
  );
}

export default SignupPage;
