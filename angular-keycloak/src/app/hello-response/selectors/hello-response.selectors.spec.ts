import * as fromHelloResponse from '../reducers/hello-response.reducer';
import { selectHelloResponseState } from './hello-response.selectors';

describe('HelloResponse Selectors', () => {
  it('should select the feature state', () => {
    const result = selectHelloResponseState({
      [fromHelloResponse.helloResponseFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
