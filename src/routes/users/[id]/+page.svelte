<script>
  export let data; // Data passed from +page.server.js
</script>

<main>
  <div class="user-details">
    <div class="card">
      <!-- Display User's Profile Picture -->
      {#if data.user.Image_url}
        <img
          src={data.user.Image_url}
          alt="{data.user.name}'s Profile Picture"
          class="profile-picture"
        />
      {/if}

      <h1>{data.user.name}</h1>
      <p><strong>Age:</strong> {data.user.age}</p>
      <p><strong>Email:</strong> {data.user.email}</p>
      <p><strong>Goal:</strong> {data.user.goal}</p>
    </div>

    <a href="/community" class="back-link">Back to Users</a>
  </div>
</main>

<style>
  :global(body) {
    font-family: "Arial", sans-serif;
    background-color: #f4f4f9;
    color: #333;
    margin: 0;
    padding: 0;
  }

  main {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
  }

  .user-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 500px;
    width: 100%;
  }

  .card img.profile-picture {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .card h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #007bff;
  }

  .card p {
    font-size: 1.2rem;
    margin: 10px 0;
    color: #555;
  }

  .back-link {
    text-decoration: none;
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    display: inline-block;
    transition: background-color 0.2s;
  }

  .back-link:hover {
    background-color: #0056b3;
  }
</style>
