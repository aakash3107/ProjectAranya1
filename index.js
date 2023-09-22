const axios = require('axios');
function getData(){
    
    let fullname = document.getElementById('fullname').value
    let mobile = document.getElementById('contact_no').value
    let email = document.getElementById('email').value
    const dataToSend = {
        name: fullname,
        email: email,
        mobile: mobile,
        meta: "meta data here"
    };

    const apiUrl = 'https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-930072581261/insertLead'; 
    
    axios.post(apiUrl, dataToSend)
    .then(response => {
        console.log('Data sent successfully:', response.data);
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });
    

}
console.log(getData());


