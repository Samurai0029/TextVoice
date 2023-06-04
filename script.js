const recognition = new window.webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = event => {
    let transcript = '';

    for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i][0].transcript;
        transcript += result;
    }

    document.getElementById('result').value = transcript;
    };

    // add event listeners for the start and stop buttons
document.getElementById('startbtn').addEventListener('click', () => {
    recognition.start();
});
document.getElementById('stopbtn').addEventListener('click', () => {
    recognition.stop();
});


let read = document.getElementById('read');

read.addEventListener('click', () => {
    var msg = new SpeechSynthesisUtterance(document.getElementById('input').value);
    window.speechSynthesis.speak(msg);
})






let linears = ["#d9ed92",
"#b5e48c",
"#99d98c",
"#76c893",
"#52b69a",
"#34a0a4",
"#168aad",
"#1a759f",
"#1e6091",
"#184e77",
"#0096c7",
"#00b4d8",
"#ff9e00",
"#ff9100",
"#ff8500",
"#ff6d00",
"#ff5400",
"#240046",
"#3c096c",
"#5a189a",
"#7b2cbf",
"#9d4edd",
"#b8d0eb",
"#92e6a7",
"#2dc653",
"#208b3a",
"#1a7431",
"#10451d",
"#0b525b",
"#1b3a4b",
"#272640",
"#3e1f47",
"#4d194d",
"#201a23",
"#b5e48c"
]

let bodyStyle = document.body;

counter = 0

bodyStyle.addEventListener("click",() => {
    bodyStyle.style.background = linears[counter];
    counter++;
    if (counter >= linears.length - 1) {
        counter = 0;
    }
})




let exchange = document.getElementById("exchange");
let changeFunc = document.querySelector(".changeFunc");


exchange.addEventListener("click", () => {

    if (changeFunc.style.transform == "translateX(-50%)") {
        changeFunc.style.transform = "translateX(0%)";
    }
    else {
        changeFunc.style.transform = "translateX(-50%)";
    }

})