import React, { useState, useEffect } from 'react';

function Storage() {

    // Counter using localStorage
    const [counter, setCounter] = useState(() => {
        const savedCounter = localStorage.getItem('counter');
        return savedCounter ? parseInt(savedCounter, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem('counter', counter);
    }, [counter]);

    const [email, setEmail] = useState(() => sessionStorage.getItem('email') || '');
    const [password, setPassword] = useState(() => sessionStorage.getItem('password') || '');

    const handleSave = () => {
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
    };

    // For Clear the form
    const handleClear = () => {
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('password');
        setEmail('');
        setPassword('');
    };


    return (
        <div style={{ padding: '20px' }}>
            {/* Counter */}
            <div>
                <h2>Counter</h2>
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
                <button onClick={() => setCounter(counter - 1)} disabled={counter <= 0}>
                    Decrease
                </button>
                <p>Current Counter: {counter}</p>
            </div>

            {/* form */}
            <div>
                <h2>Email & Password</h2>
                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />
                <label>Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />
                <button onClick={handleSave}>Save to Session Storage</button>
                <button onClick={handleClear}>Clear</button>
            </div>
        </div>
    )
}
export default Storage