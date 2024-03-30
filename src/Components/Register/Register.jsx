
import { useFormik } from "formik"

export default function Register() {
  function  submitRegister (){
    console.log('submit');
  }
  function validate(values){
    let motpasse = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    let phoneRe =
    /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors ={};
    if(!values.name){
      errors.name= "name is required";
    }
    else if(values.name.length <3){
      errors.name= "name minlenght is 3";
    }
    else if(values.name.length >10){
      errors.name= "name maxlenght is 10";
    }
    if(!values.phone){
      errors.phone= "phone is required";
    }
    if(!phoneRe.test(values.phone)){
      errors.phone= "phone number invalide";
    }
    if (!values.email) {
      errors.email = "email is required";
    }
    if (!emailRegex.test(values.email)) {
      errors.email = "email  invalid";
    }
    if (!values.password) {
      errors.password = "password is required";
    }
    if (!motpasse.test(values.password)) {
      errors.password = "password invalid";
    }
    
    return errors;
  }
  ;
let formik = useFormik({
  initialValues:{
    name:'',
    phone:'',
    email:'',
    password:'',
    rePassword:'',
  },validate,
  onSubmit: submitRegister
})

  return (
    <>
    <div className=" w-50 mx-auto py-5">
    <h2 className="py-2.5">Register Now</h2>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name"></label>
      <input 
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.name}
      className="form-control"
      name="name"
      placeholder="name..."
      type="text" 
      id="name"></input>
        {formik.errors.name && formik.touched.name &&
         <div className="alert mt-2 p-2 alert-danger">{formik.errors.name}</div>
      }
      
      <label htmlFor="phone"></label>
      <input 
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.phone}
      className="form-control"
      name="phone"
      type="text" 
      placeholder="phone..."
      id="phone"></input>
      {formik.errors.phone && formik.touched.phone &&
         <div className="alert mt-2 p-2 alert-danger">{formik.errors.phone}</div>
      }
      
        <label htmlFor="email"></label>
      <input 
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.email}
      className="form-control"
      name="email"
      type="text" 
      placeholder="email@.."
      id="email"></input>
        {formik.errors.email && formik.touched.email &&
         <div className="alert mt-2 p-2 alert-danger">{formik.errors.email}</div>
      }
      
        <label htmlFor="password"></label>
      <input 
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.password}
      className="form-control"
      name="password"
      type="password" 
      placeholder="password.."
      id="password"></input>
        {formik.errors.password && formik.touched.password &&
         <div className="alert mt-2 p-2 alert-danger">{formik.errors.password}</div>
      }
        <label htmlFor="password"></label>
      <input 
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.rePassword}
      className="form-control"
      name="rePassword"
      type="password" 
      placeholder="repassword.."
      id="rePassword"></input>
      
      
       <button type="submit" className="btn bg-main text-white my-3">Register</button>
    </form>
    </div>
    </>
  )
}
