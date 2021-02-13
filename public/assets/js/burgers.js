document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const changeEatBtns = document.querySelectorAll('.change-eat');
  
    // Set up the event listener for the create button
    if (changeEatBtns) {
      changeEatBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          console.log('test');
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newEat = e.target.getAttribute('data-neweat');
  
          const newSleepState = {
            sleepy: newEat,
          };
  
          fetch(`/api/burger/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newEatState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed eat to: ${newEat}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }

      // CREATE
  const createBurgerBtn = document.getElementById('create-form');

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        name: document.getElementById('ca').value.trim(),
        sleepy: document.getElementById('sleepy').checked,
      };

      // Send POST request to create a new quote
      fetch('/api/cats', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById('br').value = '';

        // Reload the page so the user can see the new quote
        console.log('Created a new burger!');
        location.reload();
      });
    });
  }
});