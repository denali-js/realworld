export default function drawRoutes(router) {

  router.namespace('/api', (api) => {

    // Users
    api.post('/users/login', 'users/login');
    api.post('/users', 'users/register');
    api.get('/user', 'users/show');
    api.put('/user', 'users/update');

    // Profiles
    api.get('/profiles/:username', 'profiles/show');
    api.post('/profiles/:username/follow', 'profiles/follow');
    api.delete('/profiles/:username/follow', 'profiles/unfollow');

    // Articles
    api.resource('article');
    api.get('/articles/feed', 'articles/feed');
    api.post('/articles/:slug/favorite', 'articles/favorite');
    api.delete('/articles/:slug/favorite', 'articles/unfavorite');

    // Comments
    api.post('/articles/:slug/comments', 'articles/comments/create');
    api.get('/articles/:slug/comments', 'articles/comments/list');
    api.delete('/articles/:slug/comments/:id', 'articles/comments/destroy');

    // Tags
    api.get('/tags', 'tags/list');

  });
}
