import test from 'ava';
import { appAcceptanceTest } from 'denali';

appAcceptanceTest(test);

test('POST /comments > creates a comment', async (t) => {
  let result = await t.context.app.post('/comments', {
      // Add the comment payload here
  });

  t.is(result.status, 201);
  // t.is(result.body.foo, 'bar');
});

test('GET /comments > should list comments', async (t) => {
  let result = await t.context.app.get('/comments');

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('GET /comments/:id > should show a comment', async (t) => {
  let { body } = await t.context.app.post('/comments', {
      // Add the comment payload here
  });
  let id = body.data.id;

  let result = await t.context.app.get(`/comments/${ id }`);

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('PATCH /comments/:id > should update a comment', async (t) => {
  let { body } = await t.context.app.post('/comments', {
      // Add the comment payload here
  });
  let id = body.data.id;

  let result = await t.context.app.patch(`/comments/${ id }`, {
      // Add the comment payload here
  });

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('DELETE /comments/:id > should delete a comment', async (t) => {
  let { body } = await t.context.app.post('/comments', {
      // Add the comment payload here
  });
  let id = body.data.id;

  let result = await t.context.app.delete(`/comments/${ id }`);

  t.is(result.status, 204);
});
