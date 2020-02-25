import { ExampleUserPostRequest } from './user/post/request';
import { ExampleUserPostResponse } from './user/post/response';
export default interface Api {
  'user': {
    post: {
      request: ExampleUserPostRequest;
      response: ExampleUserPostResponse;
    };
  };
}
