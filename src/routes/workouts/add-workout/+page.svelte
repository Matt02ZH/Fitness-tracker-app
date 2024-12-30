<script>
  let { form } = $props(); // Used to handle form success feedback
</script>

<main>
  <section class="hero">
    <h1>Add a New Workout</h1>
    <p>Create a personalized plan to achieve your fitness goals.</p>
  </section>

  <section class="form-container">
    <form method="POST" action="?/create" enctype="multipart/form-data">
      <div class="mb-3">
        <label for="goal" class="form-label">Goal</label>
        <input name="goal" class="form-control" type="text" required />
      </div>
      <div class="mb-3">
        <label for="frequency" class="form-label">Frequency</label>
        <input name="frequency" class="form-control" type="text" required />
      </div>
      <div class="mb-3">
        <label for="workout-image" class="form-label">Workout Image</label>
        <input name="workout-image" class="form-control" type="file" />
      </div>
      <div id="exercises">
        <h2>Exercises</h2>
        <div class="exercise">
          <label for="exercise-name" class="form-label">Name</label>
          <input name="exercise-name" class="form-control" type="text" required />

          <label for="exercise-reps" class="form-label">Reps</label>
          <input name="exercise-reps" class="form-control" type="number" required />

          <label for="exercise-sets" class="form-label">Sets</label>
          <input name="exercise-sets" class="form-control" type="number" required />

          <label for="exercise-weight" class="form-label">Weight (optional)</label>
          <input name="exercise-weight" class="form-control" type="number" />
        </div>
      </div>
      <button type="submit" class="btn">Add Workout</button>
    </form>

    {#if form?.success}
      <p class="success-message">Workout created successfully!</p>
    {/if}

    <a href="/workouts" class="back-link">Back to Workouts</a>
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
    background: linear-gradient(135deg, #28a745, #218838);
    color: white;
    padding: 50px;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .hero h1 {
    margin: 0;
    font-size: 2.8rem;
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
    background-color: #007bff;
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
    background-color: #0056b3;
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

  h2 {
    font-size: 1.5rem;
    color: #007bff;
    margin-bottom: 20px;
  }

  .exercise {
    background: #f4f4f9;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
</style>
