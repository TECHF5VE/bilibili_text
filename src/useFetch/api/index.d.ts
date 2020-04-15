import { ExampleUserPostRequest } from './example/user/post/request';
import { ExampleUserPostResponse } from './example/user/post/response';
import { ExampleWatchLaterPostResponse } from './example/watchLater/post/response';
import { UserLoginPostRequest } from './user/login/post/request';
import { UserLoginPostResponse } from './user/login/post/response';
import { UserSignupPostRequest } from './user/signup/post/request';
import { UserSignupPostResponse } from './user/signup/post/response';
import { UserWatchLaterAddPostRequest } from './user/watchLater/add/post/request';
import { UserWatchLaterAddPostResponse } from './user/watchLater/add/post/response';
import { UserWatchLaterAllRemovePostRequest } from './user/watchLater/allRemove/post/request';
import { UserWatchLaterAllRemovePostResponse } from './user/watchLater/allRemove/post/response';
import { UserWatchLaterGetRequest } from './user/watchLater/get/request';
import { UserWatchLaterGetResponse } from './user/watchLater/get/response';
import { UserWatchLaterRemovePostRequest } from './user/watchLater/remove/post/request';
import { UserWatchLaterRemovePostResponse } from './user/watchLater/remove/post/response';
import { UserWatchLaterSearchPostRequset } from './user/watchLater/search/post/requset';
import { UserWatchLaterSearchPostResponse } from './user/watchLater/search/post/response';
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
  'user/watchLater/add': {
    post: {
      request: UserWatchLaterAddPostRequest;
      response: UserWatchLaterAddPostResponse;
    };
  };
  'user/watchLater/allRemove': {
    post: {
      request: UserWatchLaterAllRemovePostRequest;
      response: UserWatchLaterAllRemovePostResponse;
    };
  };
  'user/watchLater': {
    get: {
      request: UserWatchLaterGetRequest;
      response: UserWatchLaterGetResponse;
    };
  };
  'user/watchLater/remove': {
    post: {
      request: UserWatchLaterRemovePostRequest;
      response: UserWatchLaterRemovePostResponse;
    };
  };
  'user/watchLater/search': {
    post: {
      requset: UserWatchLaterSearchPostRequset;
      response: UserWatchLaterSearchPostResponse;
    };
  };
}
