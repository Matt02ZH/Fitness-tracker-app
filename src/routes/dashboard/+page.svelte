<script>
  import Chart from 'chart.js/auto';
  import { onMount } from 'svelte';

  export let data;

  let chartCanvas;

  onMount(() => {
    if (data.popularGoals && data.popularGoals.length > 0) {
      const goalLabels = data.popularGoals.map(goal => goal._id);
      const goalCounts = data.popularGoals.map(goal => goal.count);

      new Chart(chartCanvas, {
        type: 'bar',
        data: {
          labels: goalLabels,
          datasets: [
            {
              label: 'Goal Frequency',
              data: goalCounts,
              backgroundColor: [
                '#ff6384',
                '#36a2eb',
                '#ffce56',
                '#4bc0c0',
                '#9966ff',
              ],
              borderColor: '#333',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Goals',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Frequency',
              },
              beginAtZero: true,
            },
          },
        },
      });
    }
  });
</script>

<main>
  <section class="hero">
    <h1>Analytics Dashboard</h1>
    <p>Gain insights into your Fitness Tracker app usage.</p>
  </section>

  <section class="stats">
    <div class="stat-card">
      <h2>Total Users</h2>
      <p>{data.usersCount}</p>
    </div>
    <div class="stat-card">
      <h2>Total Workouts</h2>
      <p>{data.workoutsCount}</p>
    </div>
  </section>

  <section class="graph-section">
    <h2>Most Popular Goals</h2>
    <canvas bind:this={chartCanvas}></canvas>
  </section>

  <a href="/" class="back-link">Back to Homepage</a>
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .hero {
    text-align: center;
    background-color: #007bff;
    color: white;
    padding: 40px;
    border-radius: 10px;
    margin-bottom: 40px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .hero h1 {
    margin: 0;
    font-size: 2.5rem;
  }

  .hero p {
    margin-top: 10px;
    font-size: 1.2rem;
  }

  .stats {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 40px;
  }

  .stat-card {
    background: #f4f4f9;
    padding: 20px;
    border-radius: 10px;
    flex: 1;
    min-width: 300px;
    max-width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .stat-card h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  .stat-card p {
    font-size: 1.2rem;
    color: #555;
  }

  .graph-section {
    margin: 40px 0;
    text-align: center;
  }

  .graph-section h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #007bff;
  }

  canvas {
    max-width: 100%;
    height: 400px;
    margin: 0 auto;
  }

  .back-link {
    display: block;
    text-align: center;
    margin: 40px auto 0;
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    width: fit-content;
    font-weight: bold;
  }

  .back-link:hover {
    background-color: #218838;
  }
</style>
