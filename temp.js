import API from './api';

const requestPosts = () => {
  return Promise.all([API.fetchPosts(), API.fetchUsers()]) //
    .then(([posts, users]) => {
      let comments = [];
      posts.forEach((post) =>
        API.fetchComments(post.id).then((value) => {
          console.log(value);
          comments.push(value);
        })
      );

      return [posts, users, comments];
    })

    .then(([posts, users, comments]) => {
      console.log('posts', posts);
      console.log('users', users);
      console.log('comments', comments);
      const userMap = users.reduce((accUserMap, user) => {
        accUserMap[user.id] = user;
        return accUserMap;
      }, {});

      const commentMap = comments.reduce((accCommentMap, comment) => {
        accCommentMap[comment.postId]
          ? [...accCommentMap[comment.postId], comment]
          : [comment];
        return accCommentMap;
      }, {});

      return transformPosts(posts, userMap, commentMap);
    });
};

export default requestPosts;

function transformPosts(posts, userMap, commentMap) {
  return posts.map(({ id, userId, ...rest }) => ({
    ...rest,
    user: userMap[userId],
    comments: commentMap[id],
  }));
}
