import test from 'ava';
import { appAcceptanceTest } from 'denali';

appAcceptanceTest(test);

test('POST /articles > creates a article', async (t) => {
  let result = await t.context.app.post('/articles', {
      // Add the article payload here
  });

  t.is(result.status, 201);
  // t.is(result.body.foo, 'bar');
});

test('GET /articles > should list articles', async (t) => {
  let result = await t.context.app.get('/articles');

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('GET /articles/:id > should show a article', async (t) => {
  let { body } = await t.context.app.post('/articles', {
      // Add the article payload here
  });
  let id = body.data.id;

  let result = await t.context.app.get(`/articles/${ id }`);

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('PATCH /articles/:id > should update a article', async (t) => {
  let { body } = await t.context.app.post('/articles', {
      // Add the article payload here
  });
  let id = body.data.id;

  let result = await t.context.app.patch(`/articles/${ id }`, {
      // Add the article payload here
  });

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('DELETE /articles/:id > should delete a article', async (t) => {
  let { body } = await t.context.app.post('/articles', {
      // Add the article payload here
  });
  let id = body.data.id;

  let result = await t.context.app.delete(`/articles/${ id }`);

  t.is(result.status, 204);
});
