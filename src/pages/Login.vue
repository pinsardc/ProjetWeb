<template>
  <form>
  <div>
    <label>Email:</label>
    <input type='email' autocomplete='username' id='email'/>
  </div>
  <div>
    <label>Password:</label>
    <input type='password' autocomplete='new-password' />
  </div>
  <input type="submit" value="Login">
</form>
</template>

<script>
export default {};
</script>

</script>

<style>
div {
  margin: 3px;
}

label {
  display: inline-block;
  width: 100px;
}
</style>