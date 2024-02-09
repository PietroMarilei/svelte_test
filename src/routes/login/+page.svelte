<script lang="ts">
  import axios from "axios";
  // import { jwtToken } from "../../stores/Store.ts";
  import { goto } from "$app/navigation";

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
</script>

<main>
  <h1 class="text-center">Login</h1>
  <form on:submit|preventDefault={handleLogin}>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username} required />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required />

    <button type="submit">Login</button>
  </form>
  
  

  {#if success}
    <div>logged in -> </div>
  {/if}
</main>

<style lang="scss">
  h1 {
    background-color: red;
  }
</style>
