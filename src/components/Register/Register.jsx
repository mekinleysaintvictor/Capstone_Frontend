import React from "react";
import useForm from "../CustomForm/CustomForm";

const RegisterForm = () => {
    const { formValues, handleChnage, handleSubmit } = useForm(register);

    function register(){
        alert(`Thanks for registering ${formValues.username}!`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username pw1 pw 2 email first_name last_name
                        <div>
                            <input type='text' name='username' onChange={handleChnage} value={formValues.username} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Password
                        <div>
                            <input type='password' name='password' onChange={handleChnage} value={formValues.password} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Confirm PassWord
                        <div>
                            <input type='password' name='password2' onChange={handleChnage} value={formValues.password2} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Email
                        <div>
                            <input type='email' name='email' onChange={handleChnage} value={formValues.email} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        First Name
                        <div>
                            <input type='text' name='first_name' onChange={handleChnage} value={formValues.first_name} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Last Name
                        <div>
                            <input type='text' name='last_name' onChange={handleChnage} value={formValues.last_name} required={true}/>
                        </div>                        
                    </label>
                </div>
            </form>
        </div>
    )
}