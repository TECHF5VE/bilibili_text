import { ApiUserLoginRequest } from './api/user/login/request';
import { ApiUserLoginResponse } from './api/user/login/response';
import { ApiUserLogonRequest } from './api/user/logon/request';
import { ApiUserLogonResponse } from './api/user/logon/response';
import { ExampleUserPostRequest } from './example/user/post/request';
import { ExampleUserPostResponse } from './example/user/post/response';
export default interface Api {
  'api/user': {
    login: {
      request: ApiUserLoginRequest;
      response: ApiUserLoginResponse;
    };
    logon: {
      request: ApiUserLogonRequest;
      response: ApiUserLogonResponse;
    };
  };
  'example/user': {
    post: {
      request: ExampleUserPostRequest;
      response: ExampleUserPostResponse;
    };
  };
}
