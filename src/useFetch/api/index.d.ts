import { ExampleUserPostRequest } from './example/user/post/request';
import { ExampleUserPostResponse } from './example/user/post/response';
import { ExampleWatchLaterPostResponse } from './example/watchLater/post/response';
import { UserLoginPostRequest } from './user/login/post/request';
import { UserLoginPostResponse } from './user/login/post/response';
import { UserSignupPostRequest } from './user/signup/post/request';
import { UserSignupPostResponse } from './user/signup/post/response';
import { UserWatchLaterPostRequest } from './user/watchLater/post/request';
import { UserWatchLaterPostResponse } from './user/watchLater/post/response';
export default interface Api {
  'example/user': {
    post: {
      request: ExampleUserPostRequest;
      response: ExampleUserPostResponse;
    };
  };
  'example/watchLater': {
    post: {
      response: ExampleWatchLaterPostResponse;
    };
  };
  'user/login': {
    post: {
      request: UserLoginPostRequest;
      response: UserLoginPostResponse;
    };
  };
  'user/signup': {
    post: {
      request: UserSignupPostRequest;
      response: UserSignupPostResponse;
    };
  };
  'user/watchLater': {
    post: {
      request: UserWatchLaterPostRequest;
      response: UserWatchLaterPostResponse;
    };
  };
}
