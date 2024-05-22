const API_URL = 'https://jsonplaceholder.typicode.com';

const fetchPosts = () =>
  // post 데이터를 받아옵니다.
  fetch(`${API_URL}/posts`).then((response) => response.json());

const fetchUsers = () =>
  // user 데이터를 받아옵니다.
  fetch(`${API_URL}/users`).then((response) => response.json());

const fetchComments = (
  postId // 입력된 post id에 해당하는 comment 데이터를 받아옵니다.
) =>
  fetch(`${API_URL}/posts/${postId}/comments`).then((response) =>
    response.json()
  );

///////////////////////
//////////////////////

const requestPosts = () => {
  return Promise.all([API.fetchPosts(), API.fetchUsers()])
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

export default requestPosts;

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

////////////////////
////////////////////
////////////////////

const testPostData = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
];

const testUserData = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
];

const testCommentData = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et',
  },
];
