// document.getElementById("sendbtn").addEventListener("click", function () {
//     const selectedUser = document.getElementById("selecter").value;
//     const userInput = document.getElementById("userInput").value.trim();

//     if (!userInput) return;

//     if (selectedUser === "ME") {
//         const rightTextArea = document.getElementById("txtarea2");
//         rightTextArea.innerHTML += `<div class="text-end bg-white">${userInput}</div>`;
//     } else if (selectedUser === "Amal") {
//         const leftTextArea = document.getElementById("txtarea1");
//         leftTextArea.innerHTML += `<div class="text-start bg-white">${userInput}</div>`;
//     }

//     document.getElementById("userInput").value = "";
// });


// var md = window.markdownit();
// document.getElementByID("content").innerHTML = md.render("# Header");

// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const raw = JSON.stringify({
//   "contents": [
//     {
//       "parts": [
//         {
//           "text": "hello"
//         }
//       ]
//     }
//   ]
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow"
// };

// fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAWsSaRT643b-hb3T1m6tB_XykxXOc6knM", requestOptions)
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result.candidates[0].content.parts[0].text)
//     document.getAnimations("sendbtn").innerHTML

// })
//   .catch((error) => console.error(error));

var md = window.markdownit();

console.log(document.getElementById("chatwindow"));

function getinput() {
  let input = document.getElementById("userinput").value;
  document.getElementById("chatwindow").innerHTML += `<li class="d-flex gap-4 justify-content-end">
                    <h5>${input}</h5>
                </li>`;

                const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "contents": [
    {
      "parts": [
        {
          "text": input
        }
      ]
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAWsSaRT643b-hb3T1m6tB_XykxXOc6knM", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result.candidates[0].content.parts[0].text)
    document.getElementById("chatwindow").innerHTML+=` <li class="d-flex gap-4">
                  <h5>${md.render(result.candidates[0].content.parts[0].text)}</h5>
                </li>`

  })
    .catch((error) => console.error(error));
}






