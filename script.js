fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        const userWithStats = {
            name: `${user.name.first} ${user.name.last}`,
            age: user.dob.age,
            city: user.location.city,
            followers: Math.floor(Math.random() * 100000),
            likes: Math.floor(Math.random() * 1000000),
            photos: Math.floor(Math.random() * 2000),
            picture: user.picture.large
        };

        document.querySelector('.profile-card__name').textContent = userWithStats.name;
        document.querySelector('.profile-card__age').textContent = userWithStats.age;
        document.querySelector('.profile-card__city').textContent = userWithStats.city;

        const imageElement = document.querySelector('.profile-card__image');
        imageElement.src = userWithStats.picture;

        imageElement.onload = () => {
            imageElement.style.display = 'block';
        };
        imageElement.onerror = () => {
            console.error('Error loading image');
            imageElement.style.display = 'none';
        };

        document.querySelector('.profile-card__stat-value[data-stat="followers"]').textContent = userWithStats.followers.toLocaleString();
        document.querySelector('.profile-card__stat-value[data-stat="likes"]').textContent = userWithStats.likes.toLocaleString();
        document.querySelector('.profile-card__stat-value[data-stat="photos"]').textContent = userWithStats.photos.toLocaleString();
    })
    .catch(error => console.error('Error:', error));
