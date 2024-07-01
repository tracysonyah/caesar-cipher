const encryptText = document.getElementById("encrypt-text");
const decryptText = document.getElementById("decrypt-text");
const encryptedKey = document.getElementById("encrypt-key");
const decryptedKey = document.getElementById("decrypt-key");
const encryptBtn = document.getElementById("encrypt-button");
const decryptBtn = document.getElementById("decrypt-button");
const encryptResult = document.getElementById("encrypt-result");
const decryptResult = document.getElementById("decrypt-result");

encryptBtn.addEventListener("click", encrypt);



function encrypt(text, key) {
    text = encryptText.value;
    key = parseInt(encryptedKey.value);
    
    console.log(key);
    console.log(text);


    if(key < 1 || key > 25) {
        console.log("yes!");
        alert("Valid keys are from 1 to 25 only");
        encryptResult.innerText = "Result: ";
    }
    else {
        let result = '';
        
        for(let i = 0; i < text.length; i++) {

            let char = text[i];
            let charCode = text.charCodeAt(i);
            console.log(charCode);
    

            if(charCode >= 65 && charCode <= 90) {
                alert("yes!");
                char = String.fromCharCode(((charCode - 65 + key) % 26) + 65);   
            }
            else if(charCode >= 97 && charCode <= 122) {
                
                char = String.fromCharCode(((charCode - 97 + key) % 26) + 97);
            }
            
            result += char;
            console.log(result);
            
        }
        // encryptText.value = '';
        // encryptedKey.value = '';
        

        console.log(encryptResult.innerHTML = "Result: " + result);

        decryptText.value = result;
        decryptedKey.value = key;
    }
    
}


decryptBtn.addEventListener("click", () => {
    decrypt();
})


function decrypt(text, key) {
    text = decryptText.value;
    key = decryptedKey.value;


    console.log(text);
    console.log(key);

    if(key < 1 || key > 25) {
        alert("Valid keys are from 1 to 25 only");
        decryptResult.innerText = "Result: ";
    }
    else {
        let result = '';

        for(let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt([i]);
            console.log(charCode);

            if(charCode >= 65 && charCode <= 90) {
                char = String.fromCharCode(((charCode - 65 - key) % 26) + 65);
            }
            else if(charCode >= 97 && charCode <= 122) {
                char = String.fromCharCode(((charCode - 97 -key) % 26) + 97);
            } 

            result += char;
        }
        decryptResult.innerHTML = "Result: " + result;
    }
}

