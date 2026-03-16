import { useState } from "react";

export default function Signup() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [message,setMessage] = useState("");

const signup = async () => {

const res = await fetch("http://localhost:5000/api/signup",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
password
})
});

const data = await res.json();

setMessage(data.message || data.error);

};

return (
<div>

<h2>Signup</h2>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={signup}>
Signup
</button>

<p>{message}</p>

</div>
);

}