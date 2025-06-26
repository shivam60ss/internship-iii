document.addEventListener('DOMContentLoaded', function () {
  function fetchUser() {
    fetch('https://randomuser.me/api/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const user = data.results[0];
        document.querySelector('.user-image').src = user.picture.large;
        document.querySelector('.user-name').textContent = user.name.first + ' ' + user.name.last;
        document.querySelector('.user-email').textContent = user.email;
        document.querySelector('.user-location').textContent = user.location.city + ', ' + user.location.country;
      })
      .catch(() => {
        alert('Failed to fetch user data.');
      });
  }

  fetchUser();

  document.querySelector('.btn-refresh').addEventListener('click', function () {
    fetchUser();
  });
});
