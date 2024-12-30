<script>
  export let data;
</script>

<main>
  <section class="hero">
    <div class="background-animation"></div>
    <h1>Our Fitness Community</h1>
    <p>Connect with like-minded individuals on their fitness journey.</p>
    <a href="/add-user" class="cta-link">Add a New User</a>
    <a href="/" class="cta-link">Back to Homepage</a>
  </section>

  <section class="user-grid">
    {#if data?.users?.length > 0}
      {#each data.users as user (user._id)}
        <div class="user-card">
          <div class="user-card-inner">
            <div class="card-front">
              <h3>{user.name}</h3>
            </div>
            <div class="card-back">
              <img
                src={user.Image_url || '/images/default-profile.png'}
                alt="{user.name}'s Profile Picture"
                class="profile-picture"
              />
              <h3>{user.name}</h3>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Goal:</strong> {user.goal}</p>
              <a href={`/users/${user._id}`} class="details-link">View Profile</a>
            </div>
          </div>
        </div>
      {/each}
    {:else}
      <p>No users found. Add the first user to get started!</p>
    {/if}
  </section>
</main>

<style>
  :global(body) {
    font-family: "Poppins", sans-serif;
    background: linear-gradient(135deg, #1e1e1e, #121212);
    color: #fff;
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
    background: linear-gradient(135deg, #ff7f50, #ff4500);
    color: white;
    padding: 50px 20px;
    border-radius: 15px;
    margin-bottom: 40px;
    overflow: hidden;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }

  .background-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent);
    animation: pulse 3s infinite;
    z-index: 1;
  }

  .hero h1 {
    margin: 0;
    font-size: 3rem;
    z-index: 2;
    position: relative;
  }

  .hero p {
    margin-top: 10px;
    font-size: 1.2rem;
    line-height: 1.5;
    max-width: 700px;
    margin: 10px auto;
    z-index: 2;
    position: relative;
  }

  .cta-link {
    text-decoration: none;
    background: linear-gradient(135deg, #00f260, #0575e6);
    color: white;
    padding: 15px 30px;
    border-radius: 30px;
    font-weight: bold;
    font-size: 1.2rem;
    display: inline-block;
    margin-top: 20px;
    z-index: 2;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .cta-link:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }

  .user-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }

  .user-card {
    position: relative;
    perspective: 1000px;
    height: 300px;
  }

  .user-card-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .user-card:hover .user-card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    padding: 20px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #00c6ff, #0072ff);
  }

  .card-back {
    transform: rotateY(180deg);
    background: linear-gradient(135deg, #ff416c, #ff4b2b);
  }

  .profile-picture {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  h3 a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  h3 a:hover {
    color: #ffcc00;
  }

  p {
    font-size: 1rem;
    margin: 5px 0;
  }

  .details-link {
    text-decoration: none;
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 0.9rem;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .details-link:hover {
    background-color: #0056b3;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
