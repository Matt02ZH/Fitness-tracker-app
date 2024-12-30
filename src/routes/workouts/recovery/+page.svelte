<script>
    export let data; // Data from +page.server.js
  </script>
  
  <main>
    <section class="hero">
      <h1>Recovery Workouts</h1>
      <p>Improve flexibility and speed up recovery.</p>
      <a href="/workouts" class="back-link">Back to Workouts</a>
    </section>
  
    {#if data.recoveryWorkouts?.length > 0}
      <section class="workout-grid">
        {#each data.recoveryWorkouts as workout (workout._id)}
          <div class="workout-card">
            <h2>{workout.Goal}</h2>
            <p><strong>Frequency:</strong> {workout.Frequency}</p>
            <a href={`/workouts/${workout._id}`} class="details-link">View Details</a>
          </div>
        {/each}
      </section>
    {:else}
      <p class="no-workouts">No recovery workouts found.</p>
    {/if}
  </main>
  
  <style>
    :global(body) {
      font-family: "Poppins", sans-serif;
      background: linear-gradient(135deg, #1e1e1e, #121212);
      color: white;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
  
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
  
    .hero {
      text-align: center;
      background: linear-gradient(135deg, #007bff, #00c6ff);
      color: white;
      padding: 60px;
      border-radius: 20px;
      margin-bottom: 40px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }
  
    .hero h1 {
      font-size: 3rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0;
    }
  
    .hero p {
      margin-top: 10px;
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.8);
    }
  
    .back-link {
      display: inline-block;
      margin-top: 20px;
      text-decoration: none;
      color: white;
      background-color: #ff5733;
      padding: 15px 30px;
      border-radius: 50px;
      font-size: 1.2rem;
      font-weight: bold;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
  
    .back-link:hover {
      background-color: #c70039;
      transform: scale(1.1);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
  
    .workout-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
  
    .workout-card {
      background: white;
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .workout-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }
  
    .workout-card h2 {
      font-size: 1.6rem;
      color: #007bff;
      margin-bottom: 10px;
    }
  
    .workout-card p {
      font-size: 1rem;
      color: #555;
    }
  
    .details-link {
      text-decoration: none;
      color: white;
      background-color: #007bff;
      padding: 10px 20px;
      border-radius: 5px;
      font-weight: bold;
      display: inline-block;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
  
    .details-link:hover {
      background-color: #0056b3;
      transform: scale(1.1);
    }
  
    .no-workouts {
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.5rem;
      margin-top: 40px;
    }
  </style>
  