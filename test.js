// Obtain text to be translated
const translationText = () => {
	// let text = "YOUR TRANSLATION TEXT THAT IS CHANGING"
	let text = document.getElementById("input-text-field");
	console.log(text.value);
}

const auth_key = "5652c0b9-adcf-7f2e-f6a2-3a577f700dc9:fx";

// Test to see if event listener works on button
const submit_button = document.getElementById("submit-button");

submit_button.addEventListener("keydown", () => {
  // console.log("You clicked");
  
  console.log("start");
  translationText();
  console.log("finish");

  const response = fetch("https://api-free.deepl.com/v2/translate?auth_key=" + auth_key + "&text=" + text +"&target_lang=es&source_lang=en");

	console.log(response);
  
});

https://api-free.deepl.com/v2/translate?auth_key=5652c0b9-adcf-7f2e-f6a2-3a577f700dc9:fx&text=hello&target_lang=es&source_lang=en