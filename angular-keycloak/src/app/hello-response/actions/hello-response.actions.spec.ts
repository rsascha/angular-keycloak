import * as fromHelloResponse from './hello-response.actions';

describe('loadHelloResponses', () => {
  it('should return an action', () => {
    expect(fromHelloResponse.loadHelloResponses().type).toBe('[HelloResponse] Load HelloResponses');
  });
});
