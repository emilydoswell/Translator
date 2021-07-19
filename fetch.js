function deeplapi() {
  let text = "Hello";
  const response = fetch("https://api-free.deepl.com/v2/translate?auth_key=xxxx-xxxx-xxxx-xxxx-xxxx&text="+ text +"&target_lang=en&source_lang=es");
  const json = response.getContentText(); 
  const data = JSON.parse(json); 
  console.log(data);
}

const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? {'Content-Type': 'application/json'} : {}
  }).then(response => {
    return response.json();
  })
};

const sendData = () => {
  sendHttpRequest('POST', "https://api-free.deepl.com/v2/translate?auth_key=5652c0b9-adcf-7f2e-f6a2-3a577f700dc9:fx" + "&text=" + document.getElementById("input-text-field") + "&target_lang=en&source_lang=es");
};

const postBtn = document.getElementById('submit-button');
postBtn.addEventListener('click', sendData);



// YOUTUBE

const xhr = new XMLHttpRequest();