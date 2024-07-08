import { useFormik } from "formik";
const Book = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      date: "",
      date2: "",
      roomsBooked: "",
    },
    onSubmit: onsubmit,
  });
  console.log(formik.values);
  return (
    <section>
      <div className="form1">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="sign-items">
            <div className="form-comp">
              <label htmlFor="firstName">first name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="lastName">last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </div>
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
              <label htmlFor="date">check in</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="date2">check out</label>
              <input
                type="date"
                id="date2"
                name="date2"
                value={formik.values.date}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="number">rooms booked</label>
              <input
                type="number"
                id="number"
                name="roomsBooked"
                value={formik.values.roomsBooked}
                onChange={formik.handleChange}
              />
            </div>
            <div className="submit2">
              <button type="submit">submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Book;
