import { Link } from "react-router-dom";
import { useFormik } from "formik";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (formState) => {
      console.log(formState);
    },
  });
  console.log(formik.values);
  return (
    <section>
      <div className="form2">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="sign-items">
            <div className="form-comp">
              <label htmlFor="email">email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>

            <div className="submit2">
              <button type="submit">log in</button>
            </div>
          </div>
          <p className="form-text">
            don't have an account? <Link to="/sign up">sign up here</Link>
          </p>
        </form>
      </div>
    </section>
  );
};
export default LogIn;
