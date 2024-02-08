
  import { writable } from "svelte/store";

export let jwtToken = writable<string | null>("test");


