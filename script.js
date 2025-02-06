const messages = [
  "Cậu chắc chắn chứ?",
  "Thật sự chắc chắn chứ??",
  "Cậu có chắc như đinh đóng cột không?",
  "My ơi, làm ơn màaaa...",
  "Xin cậu suy nghĩ lại đi màaa!",
  "Nếu cậu nói không, tớ sẽ buồn lắm đó...",
  "Tớ sẽ rất rất buồn luôn á...",
  "Tớ sẽ cực kỳ, vô cùng, siêu cấp buồn bã luôn...",
  "Thôi được rồi, tớ không hỏi nữa...",
  "Đùa đấy, nói đồng ý đi màaa! ❤️",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
