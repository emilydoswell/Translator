document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('submit-button').onclick = function(){
    
    // Authorisation key
    const auth_key = "5652c0b9-adcf-7f2e-f6a2-3a577f700dc9:fx";

    // Text to be translated
    let text = document.getElementById("input-text-field").value;

    // Chosen language to translate to
    let target_lang = document.getElementById("chosen-language").value;

    const xhr = new XMLHttpRequest();

    xhr.open('POST', "https://api-free.deepl.com/v2/translate", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    // Split the sentence into individual words
    const splitSentence = (text) => {
      return text.split(' ');
    }
    
    // Create url string to translate words
    let url_string = "";
    const words = splitSentence(text);
    words.forEach((word) => {
      url_string += "&text=" + word;
    });
    
    xhr.sendTranslation = function () {
      if (xhr.readyState === 4 && xhr.status === 201){
        const serverResponse = JSON.parse(xhr.response);

        // Iterate through returned JSON containing the individually translated words
        let translation = "";
        for(var i = 0; i < serverResponse.translations.length; i++){
          translation += serverResponse.translations.text[i].text;
        }
   
        document.getElementByID('translation-output-field').textContent = translation;
      }
    };

    // Create DeepL URL containing text to be translated and chosen language to translate to
    xhr.send("https://api-free.deepl.com/v2/translate?auth_key=" + auth_key + "&text=" + url_string + "&target_lang=" + target_lang + "&source_lang=en");
    };
});



