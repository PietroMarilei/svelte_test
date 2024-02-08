<script lang="ts">
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { jwtToken } from '../../stores/Store.js';

  // Definisci una interfaccia per il tipo di un todo
  interface Todo {
    id: number;
    text: string;
    completed: boolean;
    userId: number
  }
  let todos: Todo[] = [];

  onMount(() => {
    jwtToken.subscribe((token: string | null) => {
      console.log(token);
      
      axios.get<Todo[]>('http://localhost:3000/todos/getTodo', {
        headers: {
          jwt: `${token}` 
        }
      })
      .then(response => {
        todos = response.data;
      })
      .catch(error => {
        console.error('Errore durante il recupero dei todo:', error);
      });
    });
  });
</script>

<main>
  <h1>Todo List</h1>
  <ul>
    {#each todos as todo (todo.id)}
      <li>{todo.text}</li>
    {/each}
  </ul>
</main>

<style>
  
</style>
