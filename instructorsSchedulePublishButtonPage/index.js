document.addEventListener("DOMContentLoaded", onContentLoad);

function onContentLoad() {
  if (!checkForInstructorIdQuery()) {
    return;
  }

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
  setButtonLoadingState();
  fetch('https://ictm-notion-integration-server-833012ce9672.herokuapp.com/scheduleData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      instructorId: getInstructorIdQuery()
    })
  })
      .then(response => response.text())
      .then(data => {
        unsetButtonLoadingState()
      })
      .catch(error => {
        console.error('Error:', error);
        setButtonErrorState()
      });
}

function setButtonLoadingState() {
  const btn = getButton();
  btn.style.pointerEvents = "none";
  btn.classList.add("loading");
}

function unsetButtonLoadingState() {
  const btn = getButton();
  btn.style.pointerEvents = "";
  btn.classList.remove("loading");
}

function setButtonErrorState() {
  const btn = getButton();

  unsetButtonLoadingState();

  btn.style.pointerEvents = "none";
  btn.classList.add("negative");
  btn.innerHTML = "Щось пішло не так, спробуйте перезапустити програму";
}

function getInstructorIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get("id");
}

function checkForInstructorIdQuery() {
  if (!getInstructorIdQuery()) {
    disableButtonOnQueryAbsence();

    return false;
  }

  return true;
}

function disableButtonOnQueryAbsence() {
  const button = getButton();

  button.classList.add("disabled");
  button.classList.add("negative");
  button.innerHTML = "Необхідно додати query з id інструктора";
}

function getButton() {
  return document.getElementById("schedule-btn");
}


