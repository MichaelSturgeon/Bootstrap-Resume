function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            (response) => console.log("SUCCESS", response),
            (error) => console.log("FAILED", error)

        );
    return false; // To block from loading a new page
}

// var templateParams = {
//     name: 'Aaron',
//     notes: 'The project that i want is...',
// };
// emailjs.send('gmail', 'rosie', templateParams).then(
//     (response) => {
//         console.log('SUCCESS!', response.status, response.text);
//     },
//     (error) => {
//         console.log('FAILED...', error);
//     },
// );