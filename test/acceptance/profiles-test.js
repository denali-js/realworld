import test from 'ava';
import { appAcceptanceTest } from 'denali';

appAcceptanceTest(test);

test('POST /profiles > creates a profile', async (t) => {
  let result = await t.context.app.post('/profiles', {
      // Add the profile payload here
  });

  t.is(result.status, 201);
  // t.is(result.body.foo, 'bar');
});

test('GET /profiles > should list profiles', async (t) => {
  let result = await t.context.app.get('/profiles');

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('GET /profiles/:id > should show a profile', async (t) => {
  let { body } = await t.context.app.post('/profiles', {
      // Add the profile payload here
  });
  let id = body.data.id;

  let result = await t.context.app.get(`/profiles/${ id }`);

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('PATCH /profiles/:id > should update a profile', async (t) => {
  let { body } = await t.context.app.post('/profiles', {
      // Add the profile payload here
  });
  let id = body.data.id;

  let result = await t.context.app.patch(`/profiles/${ id }`, {
      // Add the profile payload here
  });

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('DELETE /profiles/:id > should delete a profile', async (t) => {
  let { body } = await t.context.app.post('/profiles', {
      // Add the profile payload here
  });
  let id = body.data.id;

  let result = await t.context.app.delete(`/profiles/${ id }`);

  t.is(result.status, 204);
});
