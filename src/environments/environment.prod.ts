export const environment = {
  production: true,
  baseUrl: 'https://liga-bootcamp-postit.herokuapp.com',
  token: 'TOKEN_PROXY_KEY',
  user: 'USER_PROXY_KEY',
  api: {
    login: '/auth/login',
    register: '/user',
    note: {
      getNote: '/note/me',
      postNote: '/note',
      deleteNote: '/note/{noteId}',
      putNote: '/note/{noteId}',
      publicNote: '/note/feed',
      getOneNote: '/note/{noteId}',
      getPublicNoteUser: '/note/feed/{userId}'
    },
    noteComment: {
      post: '/note/{noteId}/comment',
    },
    user: {
      me: '/user/{userId}'
    }
  },
};
