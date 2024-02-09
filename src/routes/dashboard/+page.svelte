<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import { goto } from "$app/navigation";


  // import { jwtToken } from '../../stores/Store.js';

  interface Todo {
    id: number;
    text: string;
    completed: boolean;
    userId: number;
  }
  let todos: Todo[] = [];
  //eseguo questo solo se il lato client si é caricato (??) scamuffo schifoso
  if (typeof window !== "undefined") {
    const token = sessionStorage.getItem("jwtToken");

    if (!token) {
      goto("/login");
    } else {
      onMount(() => {
        axios
          .get<Todo[]>("http://localhost:3000/todos/getTodo", {
            headers: {
              jwt: token,
            },
          })
          .then((response) => {
            todos = response.data;
          })
          .catch((error) => {
            console.error("Errore durante il recupero dei todo:", error);
          });
      });
    }
  }
</script>


<main>
  
  <h1>Todo List</h1>
  <ul>
    {#each todos as todo (todo)}
      <li>{todo.text}</li>
    {/each}
  </ul>
</main>

<style>
</style>
