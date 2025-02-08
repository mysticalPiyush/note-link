function generateCode() {
    const words = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", 
                   "juliet", "kiwi", "lima", "mango", "neptune", "ocean", "phoenix", "quantum", "rainbow", "shadow", "tango"];
    
    let code;
    do {
        code = `${words[Math.floor(Math.random() * words.length)]}-${words[Math.floor(Math.random() * words.length)]}-${words[Math.floor(Math.random() * words.length)]}`;
    } while (localStorage.getItem(code));

    return code;
}

function generateAndSave() {
    let inputText = document.getElementById("inputText").value.trim();

    if (inputText === "") {
        alert("Please enter a link or note before saving.");
        return;
    }

    let code = generateCode();
    localStorage.setItem(code, inputText);

    document.getElementById("output").innerHTML = `✅ <strong>Your Code:</strong> ${code}`;
    document.getElementById("savedSection").classList.remove("hidden");  // Show output section
}

function retrieveData() {
    let retrieveCode = document.getElementById("retrieveCode").value.trim();

    if (retrieveCode === "") {
        alert("Please enter a valid code.");
        return;
    }

    let storedData = localStorage.getItem(retrieveCode);

    if (storedData) {
        document.getElementById("retrievedData").innerHTML = `✅ <strong>Retrieved Data:</strong><br>${storedData}`;
    } else {
        document.getElementById("retrievedData").innerHTML = `❌ <strong>Code not found!</strong>`;
    }
}
