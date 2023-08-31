import { useState } from "react";
import validation from "./Validation";
const Form = ({ login }) => {
    
        const [errors, setErrors] = useState ({})    
        const [userData, setUserData] = useState({
            email: '',
            password: '',

        });

        const handleChange = (event) =>{
            setUserData({
                ...userData,
                [event.target.name] : event.target.value 
            })

            setErrors(validation({
                ...userData,
                [event.target.name] : event.target.value 
            }))
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            login(userData);

        }




        return(


        <form onSubmit={handleSubmit}>
          
            <label htmlFor="email" > EMAIL  </label>
            <input type="email" name='email'placeholder="ingrese su email" value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
            <hr />
            <label htmlFor="password"> Password </label>
            <input type="password" name='password' placeholder="ingrese su password" value={userData.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
            <hr />
            <button>Submit</button>

      
        </form>

    )
}

export default Form;