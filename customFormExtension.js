const FormExtension = {
    name: 'Custom_Form', // Extension name
    type: 'response', // Extension type indicating it handles responses
    match: ({ trace }) => trace.payload.name === 'Custom_Form', // Condition for when this extension is triggered
    render: ({ trace, element }) => {
      // Function to render the form
      const formContainer = document.createElement('form'); // Create a form element dynamically
  
      // Set the inner HTML of the form, simplifying it to only include input fields and a submit button
      formContainer.innerHTML = `
        <label for="business_name">Business Name:</label>
        <input type="text" class="business_name" name="business_name">
        <label for="business_type">Business Type:</label>
        <input type="text" class="business_type" name="business_type"><br>
        <label for="first_name">First Name:</label>
        <input type="text" class="first_name" name="first_name"><br>
        <label for="last_name">Last Name:</label>
        <input type="text" class="last_name" name="last_name"><br><br>
        <label for="email">Email:</label>
        <input type="email" class="email" name="email"><br><br>
        <label for="phone">Phone Number:</label>
        <input type="tel" class="phone" name="phone"><br><br>
        <input type="submit" class="submit" value="Submit">
      `;
  
      // Attach an event listener to the form for handling the submit event
      formContainer.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        // Extract values from the form fields
        const business_name = formContainer.querySelector('.business_name').value;
        const business_type = formContainer.querySelector('.business_type').value;
        const first_name = formContainer.querySelector('.first_name').value;
        const last_name = formContainer.querySelector('.last_name').value;
        const email = formContainer.querySelector('.email').value;
        const phone = formContainer.querySelector('.phone').value;
        // Simplify the logic: Remove the submit button after submission without validation checks
        formContainer.querySelector('.submit').remove();
        // Programmatically submit the form data
        window.voiceflow.chat.interact({ type: 'complete', payload: { business_name, business_type, first_name, last_name, email, phone } });
      });
  
      element.appendChild(formContainer); // Append the form to the specified DOM element
    },
  };
  
  