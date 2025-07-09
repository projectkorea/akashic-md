const fetchData = async (type, postId) => { 
  const API_URL = 'https://jsonplaceholder.typicode.com';
  
  const urls = {
    posts: `${API_URL}/posts`,
    users: `${API_URL}/users`,
    comments: `${API_URL}/posts/${postId}/comments`,
  };

  const url = urls[type];
  if (!url) {
    throw new Error('Invalid type provided. Use "posts", "users", or "comments".');
  }

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

const requestPosts = () => {
  return Promise.all([fetchData('posts'), fetchData('users')])
    .then(([posts, users]) => {
      return fetchCommentsByPosts(posts).then((comments) => [
        posts,
        users,
        comments,
      ]);
    })
    .then(([posts, users, comments]) => {
      const commentMap = comments.reduce((acc, comment) => {
        acc[comment.postId]
          ? acc[comment.postId].push(comment)
          : (acc[comment.postId] = [comment]);
        return acc;
      }, {});
      const userMap = users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});

      return transformPosts(posts, userMap, commentMap);
    });
};

function transformPosts(posts, userMap, commentMap) {
  return posts.map(({ id, userId, ...rest }) => ({
    ...rest,
    user: userMap[userId],
    comments: commentMap[id],
  }));
}

function fetchCommentsByPosts(posts) {
  return Promise.all(posts.map((post) => API.fetchComments(post.id))).then(
    (commentArray) => commentArray.flatMap((arr) => arr)
  );
}
