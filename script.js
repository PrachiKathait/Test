function appendDiv() {
    const inputText = document.getElementById("userInput").value.trim();

    const newDiv = document.createElement("div");
    newDiv.classList.add("new-div");
    newDiv.textContent = inputText;

    document.getElementById("container").append(newDiv);
}
