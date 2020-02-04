<template>
  <div>
    <div class="imgcontainer">
      <img src="@/images/img_avatar2.png" alt="Avatar" class="avatar" />
    </div>

    <div class="container">
      <label for="uname">
        <b>Username</b>
      </label>
      <input type="text" placeholder="Enter Username" name="uname" required />

      <label for="psw">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <button type="submit">Login</button>
      <label>
        <br />
        <input type="checkbox" checked="checked" name="remember" /> Remember me
      </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" class="cancelbtn">Cancel</button>
      <br />
      <span class="psw">
        
        <a href="#"> Forgot password?</a>
      </span>
    </div>
  </div>
</template>

<script>
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
</script>

<style>
*{
  align-content: center;
}
form {
  border: 3px solid #f1f1f1;
  width: 30%;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4caf50;
  
  padding: 20px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 30%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.5;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: 30%;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 10%;
  border-radius: 15%;
}

/* Add padding to containers */
.container {
  padding: 16px;
  flex-direction: column;
  width: 30%;
  
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 30%;
  }
}
</style>