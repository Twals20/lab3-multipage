document.addEventListener("DOMContentLoaded" , () => {
    console.log("Script is running!");
// theme toggle 
document.getElementById("themeToggle").addEventListener("click", (e) => 
    { 
    document.body.classList.toggle("dark-theme"); 
    });
    // contact toggle 
    document.getElementById("contactForm").addEventListener("submit", (e)  =>
         { 
    e.preventDefault(); 
    const name = document.getElementById("nameInput").value.trim(); 
    const message = 
    document.getElementById("messageInput").value.trim(); 
    if (name === "" || message === "") { 
    alert("Please fill out all fields."); 
    } else { 
    document.getElementById("response").innerText = `Thanks, ${name}. 
    We'll get back to you soon!`; 
    // Optional: reset form 
    e.target.reset(); 
    } 
    });
  })
 // user list 
 document.addEventListener("DOMContentLoaded" , () => {
  console.log("Script is running!");
    const userList = document.getElementById("userList");
    const loadUsersBtn = document.getElementById("loadUsersBtn");
    
    if (loadUsersBtn && userList) {
      loadUsersBtn.addEventListener("click", async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const users = await response.json();
          userList.innerHTML = ""; // clear list
          users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
          });
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      });
    }
  })   

    

     // FAQ toggle
     document.addEventListener("DOMContentLoaded", () => {
      console.log("Script is running!");
    
      const faqsElement = document.getElementById("FAQs");
    
      if (faqsElement) {
        faqsElement.addEventListener("click", (e) => {
          if (e.target && e.target.classList.contains("faq-question")) {
            const question = e.target;
    
            // Toggle 'active' class on the question
            question.classList.toggle("active");
            console.log("Clicked:", question.textContent);
          }
        });
      } else {
        console.log("FAQ element not found!");
      }
    });
  // real time clock 
  function updateClock() {
    const now = new Date();
  
    // Format time: HH:MM:SS
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Update the clock element
    document.getElementById('clock').textContent = timeString;
  }
  
  // Call it once immediately to avoid delay
  updateClock();
  
  // Update every second
  setInterval(updateClock, 1000);
  
     
 