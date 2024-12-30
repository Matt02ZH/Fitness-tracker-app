<script>
  export let data;
</script>

<main>
  <section class="hero">
    <div class="background-animation"></div>
    <div class="hero-content">
      <h1>Welcome to Your Fitness Tracker</h1>
      <p>Your journey towards a healthier lifestyle starts here.</p>
      <div class="hero-buttons">
        <a href="/workouts" class="primary-link">Explore Workouts</a>
        <a href="/dashboard" class="secondary-link">Discover Insights</a>
        <a href="/community" class="primary-link">Visit Our Community</a>
      </div>
    </div>
  </section>
</main>

<style>
  :global(body) {
    font-family: "Poppins", sans-serif;
    background: linear-gradient(135deg, #1e1e1e, #121212);
    color: black;
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
    position: relative;
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    padding: 120px 40px;
    border-radius: 30px;
    margin-bottom: 40px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
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
    font-size: 4rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    line-height: 1.3;
    background: linear-gradient(135deg, #ffdd57, #ff6f61);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero p {
    margin-top: 30px;
    font-size: 1.8rem;
    line-height: 2;
    max-width: 800px;
    margin: 30px auto;
    color: rgba(255, 255, 255, 0.9);
  }

  .hero-buttons {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .primary-link,
  .secondary-link {
    text-decoration: none;
    font-weight: bold;
    padding: 20px 40px;
    border-radius: 50px;
    font-size: 1.5rem;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  }

  .primary-link {
    background-color: #ffc107;
    color: #212529;
  }

  .primary-link:hover {
    background-color: #ffca28;
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  .secondary-link {
    background-color: #333333;
    color: white;
    border: 2px solid #ffffff;
  }

  .secondary-link:hover {
    background-color: #ffffff;
    color: #333333;
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
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
