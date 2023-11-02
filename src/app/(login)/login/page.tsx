import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const handleSubmit = async (formData: FormData) => {
  "use server";
  try {
    console.log("form submitted");
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const email = formData.get("email");
    const password = formData.get("password");
    const body = JSON.stringify({ email, password });

    console.log(body);
    
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // redirect to home page
      const responseBody = await response.json();
      console.log(responseBody);
      cookies().set("token", responseBody.token);
      redirect("/");
    } else {
      // show error message
      const responseBody = await response.json();
      console.log(responseBody);
    }
  } catch (error) {
    console.error(error);
  }
};

export default function Login() {
  return (
    <div>
      <h1>Login</h1>

      <p>Log in to view protected pages</p>

      <form action={handleSubmit}>
        <label>
          Email:
          <input className="bg-slate-300" type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input className="bg-slate-300" type="password" name="password" />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
