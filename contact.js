// Using EmailJS for sending emails without backend
// You need to sign up at https://www.emailjs.com/ and get your user ID, service ID, and template ID

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate form fields (basic)
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Prepare template parameters
    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };

    // Send email using EmailJS
    emailjs.send('service_enp28ev', 'template_2avxfgc', templateParams, '_JYHkKjUXpf_d8ziu')
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      }, (error) => {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS error:", error);
      });
  });
});
