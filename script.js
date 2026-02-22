let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");

const users = [
  {
    profileUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",

    name: "Alina Johns",
    email: "alina@test.com",
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1642886513231-62fc28b06c03?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    name: "Aarav Mehta",
    email: "aarav@anonymous.com",
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    name: "Joey Nando",
    email: "joey@world.com",
  },
];

function renderUsers(arr) {
  userContainer.innerHTML = "";
  

  if(arr.length===0){
    userContainer.innerHTML = `
      <div class="no-results">
        <p style="color: gray; font-size: 1.2rem; text-align: center; margin-top: 20px;">
         No users found! 🔍
        </p>
      </div>
    `;
    return;
  }
   
 

  arr.map((obj) => {
    let { profileUrl, name, email } = obj;

    let divElem = document.createElement("div");
    divElem.className = "userItem";

    divElem.innerHTML = `
          <img
            src="${profileUrl}"
          />
          <div class="userInfo">
            <h3>${name}</h3>
            <p>${email}</p>
          </div>
`;

    userContainer.append(divElem);
  });
}

renderUsers(users);

function handleSearch(e) {
  let searchValue = e.target.value;
  let filteredUsers = users.filter((obj) => {
    return obj.name.toLowerCase().includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase());
  });

  renderUsers(filteredUsers);
}

searchInput.addEventListener("input", handleSearch);
