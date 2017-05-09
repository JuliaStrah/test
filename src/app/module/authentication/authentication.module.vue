<template>
  <div id="authentication">

    <div id="authentication-form-wrapper">
      <form>

        <div id="authentication-form-header">
          <div style="font-size: 24px; font-weight: bold">Welcome back!</div>
          <div style="font-size: 12px; font-style: italic">Login to your account below</div>
        </div>

        <label>Username</label>
        <input type="text" class="uk-input"/>

        <label>Password</label>
        <input type="password" class="uk-input"/>

        <div id="authentication-form-button-group">
          <button type="submit" class="uk-button uk-button-primary">Sign in</button>
          <router-link to="/registration">Sign up</router-link>
        </div>

      </form>
    </div>

  </div>
</template>

<script src="./authentication.module.js"></script>

<style>
  #authentication-form-wrapper {
    box-shadow: 0 1px 4px rgba(84, 83, 83, 0.7);
    width: 300px;
    height: auto;
    margin: 150px auto;
    font-size: 16px;
  }

  #authentication-form-wrapper form {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }

  #authentication-form-wrapper input {
    width: 100%;
  }

  #authentication-form-wrapper label {
    display: inline-block;
    padding-top: 2px;
  }

  #authentication-form-header {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 8px;
  }

  #authentication-form-button-group {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  #authentication-form-button-group a {
    display: block;
  }
</style>