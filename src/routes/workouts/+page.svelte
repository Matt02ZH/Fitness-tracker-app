<script>
  export let data; // Data from `+page.server.js`
</script>

<main>
  <section class="hero">
    <div class="background-animation"></div>
    <div class="hero-content">
      <h1>Your Workouts</h1>
      <p>Choose your path and start your fitness journey today.</p>
      <div class="buttons">
        <a href="/workouts/add-workout" class="primary-link">Add a New Workout</a>
        <a href="/" class="secondary-link">Back to Homepage</a>
        <a href="/workouts/all" class="alpha-link">View All Workouts</a>
      </div>
    </div>
  </section>

  <section class="workout-links">
    <div class="workout-category">
      <a href="/workouts/cardio" class="category-link">
        <h2>Cardio Workouts</h2>
        <p>Boost your endurance and cardiovascular health.</p>
      </a>
    </div>
    <div class="workout-category">
      <a href="/workouts/strength" class="category-link">
        <h2>Strength Workouts</h2>
        <p>Build muscle and increase your overall strength.</p>
      </a>
    </div>
    <div class="workout-category">
      <a href="/workouts/recovery" class="category-link">
        <h2>Recovery Workouts</h2>
        <p>Improve flexibility and speed up recovery.</p>
      </a>
    </div>
  </section>
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
    position: relative;
    text-align: center;
    background: linear-gradient(135deg, #28a745, #218838);
    color: white;
    padding: 80px 20px;
    border-radius: 20px;
    margin-bottom: 40px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }

  .background-animation {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent);
    animation: rotate 20s linear infinite;
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }

  .hero h1 {
    margin: 0;
    font-size: 3.5rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1.2;
    background: linear-gradient(135deg, #ffdd57, #ff6f61);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero p {
    margin-top: 20px;
    font-size: 1.5rem;
    line-height: 1.8;
    max-width: 700px;
    margin: 20px auto;
    color: rgba(255, 255, 255, 0.8);
  }

  .buttons {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .primary-link,
  .alpha-link,
  .secondary-link {
    text-decoration: none;
    font-weight: bold;
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 1.2rem;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  }

  .primary-link {
    background-color: #ffc107;
    color: #212529;
  }

  .primary-link:hover {
    background-color: #ffca28;
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .secondary-link {
    background-color: black;
    color: goldenrod;
  }

  .secondary-link:hover {
    background-color: black;
    color: white;
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .alpha-link {
    background-color: #007bff;
    color: white;
    border: 2px solid #007bff;
    text-transform: uppercase;
  }

  .alpha-link:hover {
    background-color: #0056b3;
    color: #ffc107;
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .workout-links {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 40px;
    justify-content: center;
  }

  .workout-category {
    flex: 1 1 calc(33.333% - 20px);
    max-width: 400px;
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
  }

  .workout-category:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  .category-link {
    display: block;
    padding: 30px;
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;
  }

  .category-link:hover {
    color: #007bff;
  }

  .category-link h2 {
    font-size: 1.8rem;
    margin: 0;
    color: #28a745;
  }

  .category-link p {
    font-size: 1rem;
    color: #555;
    margin-top: 10px;
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
