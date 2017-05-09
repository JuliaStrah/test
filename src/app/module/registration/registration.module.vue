<template>
  <div id="registration" >
     
    <div id="registration-form-wrapper">
      <form>

        <div id="registration-form-header">
          <div style="font-size: 24px; font-weight: bold">Registration</div>
        </div>

        <label>First Name</label>
        <input type="text" class="uk-input"/>

        <label>Last Name</label>
        <input type="text" class="uk-input"/>

        <label>Middle Name</label>
        <input type="text" class="uk-input"/>

        <label>Username</label>
        <input type="text" class="uk-input"/>

        <label>Password</label>
        <input type="password" class="uk-input"/>

        <label>Repeat password</label>
        <input type="text" class="uk-input"/>

        <div class="uk-margin uk-grid-small uk-child-width-auto" uk-grid>
            <label><input class="uk-radio" type="radio" name="radio2" checked> Male</label>
            <label><input class="uk-radio" type="radio" name="radio2"> Female</label>
        </div>

        <label>Address</label>
        <input type="text" class="uk-input"/>

        <div id="registration-form-button-group">
          <button type="submit" class="uk-button uk-button-primary">Sign Up</button>
          <a href="#authentication">Sign in</a>
        </div>

      </form>
    </div>

  </div>
</template>

<script src="./registration.module.js"></script>

<style>

  #registration-form-wrapper{
    box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
    width: 500px;
    height: auto;
    margin: 100px auto;
    font-size: 16px;
  }

  #registration-form-wrapper form {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }

  #registration-form-header {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 8px;
  }

  #registration-form-button-group {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }

</style>