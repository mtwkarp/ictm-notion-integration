document.addEventListener("DOMContentLoaded", () => {
  if (checkForInstructorIdQuery()) {
    showUserIdFromQuery();
  }
  // const button = document.getElementById('custom-button');
  //
  // button.addEventListener('click', () => {
  //     console.log('c7d2902a-3218-4d89-8ef5-801100358602')
  //     onCustomButtonClick();
  // })
  //
  // function onCustomButtonClick() {
  //     sendRequestToNotion();
  // }
  //
  // function sendRequestToNotion() {
  //     // fetch('', {
  //     // method: 'POST',
  //     //     headers: {
  //     //         'Content-Type': 'application/json'
  //     //     },
  //     //     body: JSON.stringify({ key: 'value' })
  //     // })
  //     //     .then(response => response.json())
  //     //     .then(data => console.log(data))
  //     //     .catch(error => console.error('Error:', error));
  // }
});

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

function getErrorTextTag() {
  return document.getElementById("error-text");
}

function showUserIdFromQuery() {
  const p = getErrorTextTag();

  p.innerHTML = `Insturctor id: ${getInstructorIdQuery()}`;
}
