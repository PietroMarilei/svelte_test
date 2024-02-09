<!-- Layout.svelte -->

<div class="container">
  <header>
    <!-- Includi qui l'intestazione del tuo sito -->
    <h1>Il mio sito</h1>
    <nav>
      <!-- Barra di navigazione -->
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Chi siamo</a></li>
        <!-- Altri link di navigazione... -->
      </ul>
    </nav>
  </header>

  <!-- Slot per il contenuto dinamico delle pagine -->
  <main>
    <slot></slot>
  </main>

  <footer>
    <!-- Piè di pagina del sito -->
    <p>&copy; 2022 Il mio sito. Tutti i diritti riservati.</p>
  </footer>
</div>
