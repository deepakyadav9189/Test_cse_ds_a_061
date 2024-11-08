function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");


    

    
    if (username === "Abhishek" && password === "12345") {
        window.location.href = "dashboard.html"; 
        return false; 
    } else {
        errorMessage.textContent = "Invalid username or password";
        return false; 
    }
}
function fetchGitHubUsers() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = ""; 
    
    
    const users = ["mojombo", "defunkt", "pjhyett", "wycats", "ezmobius", "ivey", "evanphx", "vanpelt", "wayneeseguin", "brynary"];
    
  
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user;
        userList.appendChild(li);
    });
}
