import test from 'ava';
import { appAcceptanceTest } from 'denali';

appAcceptanceTest(test);

test('POST /users > creates a user', async (t) => {
  let result = await t.context.app.post('/users', {
      // Add the user payload here
  });

  t.is(result.status, 201);
  // t.is(result.body.foo, 'bar');
});

test('GET /users > should list users', async (t) => {
  let result = await t.context.app.get('/users');

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('GET /users/:id > should show a user', async (t) => {
  let { body } = await t.context.app.post('/users', {
      // Add the user payload here
  });
  let id = body.data.id;

  let result = await t.context.app.get(`/users/${ id }`);

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('PATCH /users/:id > should update a user', async (t) => {
  let { body } = await t.context.app.post('/users', {
      // Add the user payload here
  });
  let id = body.data.id;

  let result = await t.context.app.patch(`/users/${ id }`, {
      // Add the user payload here
  });

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('DELETE /users/:id > should delete a user', async (t) => {
  let { body } = await t.context.app.post('/users', {
      // Add the user payload here
  });
  let id = body.data.id;

  let result = await t.context.app.delete(`/users/${ id }`);

  t.is(result.status, 204);
});
