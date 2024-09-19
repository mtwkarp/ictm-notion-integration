document.addEventListener("DOMContentLoaded", onContentLoad);

function onContentLoad() {
  subscribeButton();
}

function subscribeButton() {
  const btn = getButton();

  btn.addEventListener("click", onButtonClick);
}

function unsubscribeButton() {
  const btn = getButton();

  btn.removeEventListener("click", onButtonClick);
}

function onButtonClick() {
  sendRequestToNotion();
}

function sendRequestToNotion() {
  fetch('https://ictm-notion-integration-server-833012ce9672.herokuapp.com/updateCoursesAvailableInstructors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Update available instructors for all courses.'
    })
  })
      .then(response => response.text())
      .catch(error => {
        console.error('Error:', error);
      });
}

function getButton() {
  return document.getElementById("update-button");
}
