document.addEventListener('DOMContentLoaded', () => {
  const postsContainer = document.getElementById('posts-container');

  fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

function createPostElement(post) {
  const postDiv = document.createElement('div');
  postDiv.classList.add('col-4', 'p-card', 'custom-card');

  const categoryNames = post._embedded["wp:term"][1].map(category => category.name.toUpperCase()).join(', ');
    const postDate = new Date(post.date);
    const formattedDate = postDate.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });

  const content = `
      <p class="post-card__heading">${categoryNames}</p>
      <hr class="dotted-hr">
      <img src="${post.featured_media}" alt="" class="post-card__image">
      <h4 class="expandable_head" style="height: 4em;">
        <a href="${post.link}">${post.title.rendered}</a>
      </h4>
      <p class="p-heading--6">
        By <a href="${post._embedded.author[0].link}">${post._embedded.author[0].name}</a> on ${formattedDate}
      </p>
      <hr class="dotted-hr">
      <p>${post._embedded["wp:term"][0][0]?.name}</p>
    `;

    postDiv.innerHTML = content;
    return postDiv;
  }
});


