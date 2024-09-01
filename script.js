document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');

    // Usar datos simulados que proporcionaste
    const photos = [
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://images5.alphacoders.com/104/thumb-1920-1042231.jpg",
            "thumbnailUrl": "https://images5.alphacoders.com/104/thumb-1920-1042231.jpg"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://tse2.mm.bing.net/th?id=OIP.XBrasWaAkGxIgDmkdszE5wHaE8&pid=Api&P=0&h=180",
            "thumbnailUrl": "https://tse2.mm.bing.net/th?id=OIP.XBrasWaAkGxIgDmkdszE5wHaE8&pid=Api&P=0&h=180"
        },
        {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
            "albumId": 1,
            "id": 5,
            "title": "natus nisi omnis corporis facere molestiae rerum in",
            "url": "https://via.placeholder.com/600/f66b97",
            "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        },
        {
            "albumId": 1,
            "id": 6,
            "title": "accusamus ea aliquid et amet sequi nemo",
            "url": "https://via.placeholder.com/600/56a8c2",
            "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
        },
        {
            "albumId": 1,
            "id": 7,
            "title": "officia delectus consequatur vero aut veniam explicabo molestias",
            "url": "https://via.placeholder.com/600/b0f7cc",
            "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
        },
        {
            "albumId": 1,
            "id": 8,
            "title": "aut porro officiis laborum odit ea laudantium corporis",
            "url": "https://via.placeholder.com/600/54176f",
            "thumbnailUrl": "https://via.placeholder.com/150/54176f"
        },
        {
            "albumId": 1,
            "id": 9,
            "title": "qui eius qui autem sed",
            "url": "https://via.placeholder.com/600/51aa97",
            "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
        },
        {
            "albumId": 1,
            "id": 10,
            "title": "beatae et provident et ut vel",
            "url": "https://via.placeholder.com/600/810b14",
            "thumbnailUrl": "https://via.placeholder.com/150/810b14"
        }
    ];

    // Iterar sobre las fotos y crear elementos HTML
    photos.forEach(photo => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        
        const img = document.createElement('img');
        img.src = photo.thumbnailUrl;
        img.alt = photo.title;
        img.addEventListener('click', () => {
            window.open(photo.url, '_blank'); // Abrir imagen completa en nueva pestaña
        });
        
        const title = document.createElement('h3');
        title.textContent = photo.title;
        
        const description = document.createElement('p');
        description.textContent = `ID: ${photo.id}`;

        galleryItem.appendChild(img);
        galleryItem.appendChild(title);
        galleryItem.appendChild(description);
        gallery.appendChild(galleryItem);
    });
});

