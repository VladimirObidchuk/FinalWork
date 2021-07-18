
import { useState } from 'react';
import './Login.scss';

function Login() {


    return (
        <div class="login__menu" id="login__menu" >
            <div class="login__main">
                <form action="#" method="get" id="login__form" class="login__form">
                    <input
                        type="text"
                        name="login__name"
                        class="login__name"
                        id="login__name"
                        placeholder=" Enter Login"
                    />
                    <input
                        type="password"
                        name="login__password"
                        id="login__password"
                        class="login__password"
                        placeholder="Enter password"
                    />
                    <input
                        type="submit"
                        value="Submit"
                        id="login__submit"
                        class="login__submit"
                    />
                </form>
            </div>
        </div>
    );
};
export default Login;
