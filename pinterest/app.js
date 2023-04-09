document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-cards', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

  const postComment = () => {
    const input = document.querySelector('.add-comment input[type="text"]');
    const comment = input.value;
    if (comment) {
      const commentContainer = document.querySelector('.comments');
      const newComment = document.createElement('div');
      const username = document.createElement('a');
      const commentText = document.createTextNode(comment);
      username.textContent = 'myusername';
      username.setAttribute('href', '#');
      username.setAttribute('target', '_blank');
      username.style.fontWeight = 'bold';
      newComment.appendChild(username);
      newComment.appendChild(commentText);
      commentContainer.appendChild(newComment);
      input.value = '';
    }
  };
  
  // Add event listener to post comment button
  const postButton = document.querySelector('.post-comment');
  postButton.addEventListener('click', postComment);
  