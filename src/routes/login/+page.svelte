<script lang="ts">
  import axios from "axios";
  // import { jwtToken } from "../../stores/Store.ts";
  import { goto } from "$app/navigation";
import Layout from "$lib/+layout.svelte";


  let success: boolean = false;
  
  let username: string = "";
  let password: string = "";

  async function handleLogin() {
    const response = await axios.post("http://localhost:3000/auth/login", {
      username,
      password,
    });

    if (response.status === 200) {
      console.log("Login riuscito");
      const token = response.data;
      sessionStorage.setItem("jwtToken", token);

      console.log(sessionStorage);
      
      // jwtToken.set(token);
      success = true;

      goto("/dashboard");
    } else {
      console.error("Errore durante il login:", response.statusText);
    }
  }
   function redirectToGoogleLogin() {
    window.location.href = "http://localhost:3000/auth/google";
  }
</script>

<main>
  <Layout>
    <div class="container">
      <div class="col d-flex justify-content-center">
        <form on:submit|preventDefault={handleLogin} style="width: 22rem;">
          <!-- Email input -->
          <div class="form-outline mb-4 ">
            <div class="d-flex justify-content-center">
              <label class="form-label text-center" for="form2Example1">Username</label>
            </div>
            <input type="text" id="form2Example1" class="form-control" bind:value={username} required>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <div class="d-flex justify-content-center">
              <label class="form-label text-center" for="form2Example2">Password</label>
            </div>
            <input type="password" id="form2Example2" class="form-control" bind:value={password} required>
          </div>

          <!-- 2 column grid layout for inline styling -->
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked="">
                <label class="form-check-label" for="form2Example31"> Remember me </label>
              </div>
            </div>
            <div class="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <!-- Submit button -->
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
          </div>

          <!-- Register buttons -->
          <div class="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1" on:click={redirectToGoogleLogin}>
              <i class="fab fa-google"></i> Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>

    {#if success}
      <div>logged in -> </div>
    {/if}
  </Layout>
</main>

<style lang="scss">
  
</style>
