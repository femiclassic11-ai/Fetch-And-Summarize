// Asynchronous function using fetch() 
async function fetchUsersAndSummarize() {
  fetch("https://jsonplaceholder.typicode.com/users")

    // Response check
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })

    // Chain 2: Data processing
    .then((users) => {
      users
        // Filter: only users whose city starts with 'C'
        .filter((user) => user.address.city.startsWith("C"))

        // Map
        .map((user) => ({
          id: user.id,
          name: user.name,
          companyName: user.company.name,
        }))

        // forEach: display each result
        .forEach((u) => {
          console.log(`User ID ${u.id}: ${u.name} works at ${u.companyName}`);
        });
    })

    // to catch error
    .catch((error) => {
      console.error("Fetch error:", error.message);
    });
}


fetchUsersAndSummarize();

// ✅ Error test function
function testError() {
  fetch("https://jsonplaceholder.typicode.com/u5ers") // invalid URL
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error caught successfully:", error.message);
    });
}

//  Call the error test
testError();
