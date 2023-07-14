import React, { useState } from 'react';

const Login = () => {
    const [name, setName] = useState('Pulkit');
    const [email, setEmail] = useState('aaa@aaa.com');
    const [number, setNumber] = useState('9876543210');
    const [pass, setPass] = useState('GX46aS2Cpd9..J.');
    const [cpass, setCpass] = useState('GX46aS2Cpd9..J.');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [numberError, setNumberError] = useState('');
    const [passError, setPassError] = useState('');
    const [cpassError, setCpassError] = useState('');

    const validate = (event) => {
        event.preventDefault();

        // Conditions
        var nameCheck = /^[A-Za-z]{3,}$/;
        var emailCheck = /^[A-Za-z._]{3,}[@]{1}[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
        var passCheck = /^[A-Za-z!@#$%^&*]{8,16}$/;
        var numCheck = /^[6789]{1}[0-9]{9}$/;

        if (nameCheck.test(name)) {
            setNameError('');
            console.log('no-error in name');
        } else {
            setNameError('<- Correct the name');
            console.log('error in name');
            return false;
        }
        if (emailCheck.test(email)) {
            setEmailError('');
            console.log('no-error in email');
        } else {
            setEmailError('<- Correct the email');
            console.log('error in email');
            return false;
        }
        if (numCheck.test(number)) {
            setNumberError('');
            console.log('no-error in number');
        } else {
            setNumberError('<- Correct the number');
            console.log('error in number');
            return false;
        }
        if (passCheck.test(pass)) {
            setPassError('');
            console.log('no-error in pass');
        } else {
            setPassError('<- Correct the pass');
            console.log('error in pass');
            return false;
        }
        if (cpass === pass) {
            setCpassError('');
            console.log('no-error in cpass');
        } else {
            setCpassError('<- Correct the pass and cpass');
            console.log('error in pass');
            return false;
        }
    };

    return (
        <div className="form">
            <h1>Login/Register</h1>
            <form onSubmit={validate}>
                <table>
                    <tr>
                        <th>
                            <label htmlFor="name">Name</label>
                        </th>
                        <th>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                className="inputf"
                                placeholder="JhonDoe"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="email">Email</label>
                        </th>
                        <th>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                className="inputf"
                                placeholder="JhonDoe@doe.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="number">Number</label>
                        </th>
                        <th>
                            <input
                                type="number"
                                id="number"
                                value={number}
                                className="inputf"
                                placeholder="91--------"
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="pass">Password</label>
                        </th>
                        <th>
                            <div className="password-input">
                                <input
                                    type="password"
                                    id="pass"
                                    value={pass}
                                    className="inputf"
                                    placeholder="strong password"
                                    onChange={(e) => setPass(e.target.value)}
                                />
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="cpass">Confirm password</label>
                        </th>
                        <th>
                            <input
                                type="password"
                                id="cpass"
                                value={cpass}
                                className="inputf"
                                placeholder="repeat the password"
                                onChange={(e) => setCpass(e.target.value)}
                            />
                        </th>
                    </tr>
                </table>
                <button id="submit" type="submit">Login/Signup</button>
            </form>
            <p id="error-name">{nameError}</p>
            <p id="error-email">{emailError}</p>
            <p id="error-number">{numberError}</p>
            <p id="error-pass">{passError}</p>
            <p id="error-cpass">{cpassError}</p>
        </div>
    );
};

export default Login;
