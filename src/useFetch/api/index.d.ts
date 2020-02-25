import { ExampleUserPostRequest } from './example/user/post/request';
import { ExampleUserPostResponse } from './example/user/post/response';
export default interface Api {
  'example/user': {
    post: {
      request: ExampleUserPostRequest;
      response: ExampleUserPostResponse;
    };
  };
}
