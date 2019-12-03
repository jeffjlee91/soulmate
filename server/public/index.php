<?php

require_once '../api/_lifecycle.php';

switch ($request['path']) {
  case '/':
    readfile('index.html');
    exit;
  case '/api/upload-image':
  case '/api/health-check':
  case '/api/new-user':
  case '/api/sign-in':
  case '/api/discover-page':
  case '/api/individual-message':
  case '/api/likes':
    require_once "..${request['path']}.php";
  default:
    throw new ApiError("Cannot ${request['method']} ${request['path']}", 404);
}
