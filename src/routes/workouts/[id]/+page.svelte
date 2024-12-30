<script>
  export let data;
</script>

<main>
  {#if data?.workout}
    <section class="workout-details">
      <div class="background-animation"></div>
      <h1>{data.workout.Goal}</h1>
      <p class="frequency"><strong>Frequency:</strong> {data.workout.Frequency}</p>
      
      <div class="image-container">
        <p><strong>Orientation of the Exercises:</strong></p>
        <img src={data.workout.Image_url} alt="Workout Image" class="workout-image" />
      </div>

      <h2>Exercises</h2>
      <ul class="exercise-list">
        {#each data.workout.exercises as exercise}
          <li>
            <strong>{exercise.name}</strong>: {exercise.reps} reps, {exercise.sets} sets, {exercise.weight} kg
          </li>
        {/each}
      </ul>

      <a href="/workouts" class="back-link">Back to Workouts</a>
    </section>
  {:else if data?.error}
    <section class="error-message">
      <p>{data.error.message}</p>
      <a href="/workouts" class="back-link">Back to Workouts</a>
    </section>
  {:else}
    <section class="loading-message">
      <p>Loading workout details...</p>
    </section>
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
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
  }

  .workout-details {
    position: relative;
    text-align: center;
    background: linear-gradient(135deg, #ffffff, #f4f4f9);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    margin-top: 30px;
    color: #333;
  }

  .background-animation {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(0, 128, 128, 0.1), transparent);
    animation: rotate 20s linear infinite;
    z-index: 1;
  }

  h1 {
    font-size: 2.8rem;
    color: #28a745;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
  }

  .frequency {
    font-size: 1.3rem;
    color: #555;
    margin-bottom: 30px;
    position: relative;
    z-index: 2;
  }

  .image-container {
    margin: 20px 0;
    position: relative;
    z-index: 2;
  }

  .image-container p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .workout-image {
    max-width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  h2 {
    margin: 40px 0 20px;
    font-size: 2rem;
    color: #007bff;
    position: relative;
    z-index: 2;
  }

  .exercise-list {
    list-style-type: none;
    padding: 0;
    font-size: 1.2rem;
  }

  .exercise-list li {
    margin: 15px 0;
    padding: 15px;
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 2;
  }

  .back-link {
    display: inline-block;
    margin-top: 30px;
    text-decoration: none;
    color: white;
    background-color: #007bff;
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 2;
  }

  .back-link:hover {
    background-color: #0056b3;
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .error-message {
    text-align: center;
    background-color: #f8d7da;
    color: #842029;
    padding: 20px;
    border-radius: 15px;
    margin-top: 30px;
    border: 1px solid #f5c6cb;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .loading-message {
    text-align: center;
    font-size: 1.8rem;
    color: #aaa;
    margin-top: 30px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
