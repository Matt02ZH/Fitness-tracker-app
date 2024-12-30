import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("Fitness"); // Select Fitness database

//////////////////////////////////////////
// Users
//////////////////////////////////////////

// Get all users
async function getUsers() {
  let users = [];
  try {
    const collection = db.collection("Users");
    const query = {}; // Fetch all users
    users = await collection.find(query).toArray();
    users.forEach((user) => {
      user._id = user._id.toString(); // Convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
  }
  return users;
}

// Get user by id
async function getUser(id) {
  console.log(`Fetching user with ID: ${id}`); // Debug log
  let user = null;
  try {
    const collection = db.collection("Users");

    // Determine if the ID is an ObjectId or a string
    const query = ObjectId.isValid(id) ? { _id: new ObjectId(id) } : { _id: id };

    user = await collection.findOne(query);

    if (!user) {
      console.log("User not found in database");
    } else {
      user._id = user._id.toString(); // Ensure _id is converted to string
    }
  } catch (error) {
    console.error("Error in getUser:", error.message); // Log the error
  }
  return user;
}
// Create user
async function createUser(user) {
  try {
    const collection = db.collection("Users");
    const result = await collection.insertOne(user);
    console.log("User inserted with ID:", result.insertedId);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error in createUser:", error.message);
    return null;
  }
}

// Update user
async function updateUser(user) {
  try {
    let id = user._id;
    delete user._id; // Remove _id since it cannot be updated
    const collection = db.collection("Users");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: user });

    if (result.matchedCount === 0) {
      console.log("No user with id " + id);
    } else {
      console.log("User with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Delete user by id
async function deleteUser(id) {
  try {
    const collection = db.collection("Users");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No user with id " + id);
    } else {
      console.log("User with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

//////////////////////////////////////////
// Workouts
//////////////////////////////////////////

// Get all workouts
async function getWorkouts() {
  let workouts = [];
  try {
    const collection = db.collection("Workouts");
    const query = {}; // Fetch all workouts
    workouts = await collection.find(query).toArray();
    workouts.forEach((workout) => {
      workout._id = workout._id.toString();
    });
  } catch (error) {
    console.log(error);
  }
  return workouts;
}

async function getWorkout(id) {
  let workout = null;
  try {
    const collection = db.collection("Workouts");

    // Querying using _id as a string
    console.log("Querying workout with ID:", id);
    workout = await collection.findOne({ _id: id });

    if (!workout) {
      console.log("No workout found for ID:", id);
    } else {
      workout._id = workout._id.toString(); // Ensures _id is returned as a string
    }
  } catch (error) {
    console.error("Error in getWorkout:", error.message);
  }
  return workout;
}

// Create workout
async function createWorkout(workout) {
  try {
    const collection = db.collection("Workouts");
    const result = await collection.insertOne(workout);
    console.log("Workout inserted with ID:", result.insertedId);
    return result.insertedId.toString();
  } catch (error) {
    console.error("Error in createWorkout:", error.message);
    return null;
  }
}

// Update workout
async function updateWorkout(workout) {
  try {
    let id = workout._id;
    delete workout._id; // Remove _id since it cannot be updated
    const collection = db.collection("Workouts");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: workout });

    if (result.matchedCount === 0) {
      console.log("No workout with id " + id);
    } else {
      console.log("Workout with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Delete workout by id
async function deleteWorkout(id) {
  try {
    const collection = db.collection("Workouts");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No workout with id " + id);
    } else {
      console.log("Workout with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}
// Get total count of users
async function getUsersCount() {
  try {
    const collection = db.collection("Users");
    const count = await collection.countDocuments();
    return count;
  } catch (error) {
    console.error("Error in getUsersCount:", error.message);
    return 0;
  }
}

// Get total count of workouts
async function getWorkoutsCount() {
  try {
    const collection = db.collection("Workouts");
    const count = await collection.countDocuments();
    return count;
  } catch (error) {
    console.error("Error in getWorkoutsCount:", error.message);
    return 0;
  }
}

// Get popular goals from the Users collection
async function getPopularGoals() {
  try {
    const collection = db.collection("Users");
    const goals = await collection
      .aggregate([
        { $group: { _id: "$goal", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 },
      ])
      .toArray();
    return goals;
  } catch (error) {
    console.error("Error in getPopularGoals:", error.message);
    return [];
  }
}

export{getUsersCount, getWorkoutsCount, getPopularGoals};

//////////////////////////////////////////
// Workouts - Cardio
//////////////////////////////////////////

// Get all cardio workouts
async function getCardioWorkouts() {
  try {
    const cardioWorkouts = await db.collection("Cardio").find().toArray();
    cardioWorkouts.forEach((workout) => {
      workout._id = workout._id.toString(); // Convert ObjectId to string
    });
    return cardioWorkouts;
  } catch (error) {
    console.error("Error fetching cardio workouts:", error);
    throw new Error("Failed to fetch cardio workouts.");
  }
}

//////////////////////////////////////////
// Workouts - Recovery
//////////////////////////////////////////

// Get all recovery workouts
async function getRecoveryWorkouts() {
  try {
    const recoveryWorkouts = await db.collection("Recovery").find().toArray();
    recoveryWorkouts.forEach((workout) => {
      workout._id = workout._id.toString(); // Convert ObjectId to string
    });
    return recoveryWorkouts;
  } catch (error) {
    console.error("Error fetching recovery workouts:", error);
    throw new Error("Failed to fetch recovery workouts.");
  }
}

//////////////////////////////////////////
// Workouts - Strength
//////////////////////////////////////////

// Get all strength workouts
async function getStrengthWorkouts() {
  try {
    const strengthWorkouts = await db.collection("Strength").find().toArray();
    strengthWorkouts.forEach((workout) => {
      workout._id = workout._id.toString(); // Convert ObjectId to string
    });
    return strengthWorkouts;
  } catch (error) {
    console.error("Error fetching strength workouts:", error);
    throw new Error("Failed to fetch strength workouts.");
  }
}

export default {
  getCardioWorkouts,
  getRecoveryWorkouts,
  getStrengthWorkouts,
};

//////////////////////////////////////////
// Export all functions
//////////////////////////////////////////
export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  getUsersCount, getWorkoutsCount, getPopularGoals,
  getCardioWorkouts,
  getRecoveryWorkouts,
  getStrengthWorkouts,
};