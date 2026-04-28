// Example: Fetch users from a public API

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Check if response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Display data
    console.log("Users:", data);

    // Example: Display names in HTML
    const userList = document.getElementById("userList");
    data.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name;
      userList.appendChild(li);
    });

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function
fetchUsers();