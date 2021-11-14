/** @format */
import React from "react";
import * as emailjs from "emailjs-com";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import * as yup from "yup";
import { Alert, AlertTitle } from "@material-ui/lab";

const validationSchema = yup.object().shape({
  name: yup.string().required("This filed is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup.string().min(4).max(30).required("This filed is required"),
  message: yup.string().required("This filed is required"),
});

// function SimpleDialog(props) {
//   return (
//     <Alert severity='success'>
//       <AlertTitle>Success</AlertTitle>
//       This is a success alert — <strong>check it out!</strong>
//     </Alert>
//   );
// }

const EmailUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      let templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: "<isharanandun35@gmail.com>",
        subject: values.subject,
        message_html: values.message,
      };
      //create account https://dashboard.emailjs.com
      emailjs.send(
        "service_linxr6j", //https://dashboard.emailjs.com/admin
        "template_17n5jxs", //https://dashboard.emailjs.com/admin/templates
        templateParams,
        "user_0Ylz3clKCCPNJahQkRZ63" //https://dashboard.emailjs.com/admin/integration userID
      );
      alert("Thank you ! " + values.name);
      resetForm();
      // Alert("Thank you ! " + values.name);
    },
  });

  return (
    <div className='form contact-form'>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <TextField
            fullWidth
            id='name'
            name='name'
            placeholder='Your Name'
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
        <div className='form-group'>
          <TextField
            style={{ width: "100%" }}
            id='email'
            name='email'
            placeholder='Your Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className='form-group'>
          <TextField
            style={{ width: "100%" }}
            id='subject'
            name='subject'
            placeholder='Subject'
            value={formik.values.subject}
            onChange={formik.handleChange}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
          />
        </div>
        <div className='form-group'>
          <TextareaAutosize
            style={{ width: "100%" }}
            rowsMin={6}
            id='message'
            name='message'
            placeholder='Message'
            value={formik.values.message}
            onChange={formik.handleChange}
          />
        </div>
        <div className='text-center'>
          <Button type='submit'>Send Message</Button>
        </div>
      </form>
    </div>
  );
};
export default EmailUs;
