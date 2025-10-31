// Asynchronous function using fetch() 
async function fetchUsersAndSummarize() {
  fetch("https://jsonplaceholder.typicode.com/users")

    // check if response is okay
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })

    //Data processing
    .then((users) => {
      users
        // only users whose city starts with 'C'
        .filter((user) => user.address.city.startsWith("R"))
        //Map (to construct the result)
        .map((user) => ({
          id: user.id,
          name: user.name,
          companyName: user.company.name,
        }))

        // forEach
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

//  Error test function
function testError() {
  fetch("https://jsonplaceholder.typicode.com/u5ers") 
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


testError();
