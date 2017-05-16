import test from 'ava';
import { appAcceptanceTest } from 'denali';

appAcceptanceTest(test);

test('POST /tags > creates a tag', async (t) => {
  let result = await t.context.app.post('/tags', {
      // Add the tag payload here
  });

  t.is(result.status, 201);
  // t.is(result.body.foo, 'bar');
});

test('GET /tags > should list tags', async (t) => {
  let result = await t.context.app.get('/tags');

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('GET /tags/:id > should show a tag', async (t) => {
  let { body } = await t.context.app.post('/tags', {
      // Add the tag payload here
  });
  let id = body.data.id;

  let result = await t.context.app.get(`/tags/${ id }`);

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('PATCH /tags/:id > should update a tag', async (t) => {
  let { body } = await t.context.app.post('/tags', {
      // Add the tag payload here
  });
  let id = body.data.id;

  let result = await t.context.app.patch(`/tags/${ id }`, {
      // Add the tag payload here
  });

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('DELETE /tags/:id > should delete a tag', async (t) => {
  let { body } = await t.context.app.post('/tags', {
      // Add the tag payload here
  });
  let id = body.data.id;

  let result = await t.context.app.delete(`/tags/${ id }`);

  t.is(result.status, 204);
});
