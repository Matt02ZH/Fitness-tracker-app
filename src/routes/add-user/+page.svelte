<script>
  export let form; // Ensure form is exported for reactivity
</script>

<main>
  <section class="hero">
    <h1>Add a New User</h1>
    <p>Welcome to our community! Add a user to track their fitness journey.</p>
  </section>

  <section class="form-container">
    <form method="POST" action="?/create" enctype="multipart/form-data">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input id="name" name="name" class="form-control" type="text" required />
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input id="age" name="age" class="form-control" type="number" required />
      </div>
      <div class="mb-3">
        <label for="profilePicture" class="form-label">Profile Picture</label>
        <input id="profilePicture" name="profilePicture" class="form-control" type="file" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input id="email" name="email" class="form-control" type="email" required />
      </div>
      <div class="mb-3">
        <label for="goal" class="form-label">Goal</label>
        <input id="goal" name="goal" class="form-control" type="text" required />
      </div>
      <button type="submit" class="btn">Add User</button>
    </form>

    {#if form?.success}
      <p class="success-message">User created successfully!</p>
    {/if}

    <a href="/community" class="back-link">Back to Users</a>
  </section>
</main>

<style>
  :global(body) {
    font-family: "Poppins", sans-serif;
    background: linear-gradient(135deg, #1e1e1e, #121212);
    color: white;
    margin: 0;
    padding: 0;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .hero {
    text-align: center;
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    padding: 50px;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .hero h1 {
    margin: 0;
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .hero p {
    margin-top: 10px;
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .form-container {
    background: #ffffff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  .form-label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }

  .form-control {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 1rem;
  }

  .btn {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  }

  .btn:hover {
    background-color: #218838;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  .success-message {
    color: #28a745;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 20px;
  }

  .back-link {
    display: block;
    margin-top: 30px;
    text-decoration: none;
    color: white;
    background-color: #ffc107;
    padding: 15px 30px;
    border-radius: 50px;
    text-align: center;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  }

  .back-link:hover {
    background-color: #e0a800;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
</style>
