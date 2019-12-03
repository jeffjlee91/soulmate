<?php

$link = get_db_link();

if($request['method'] === 'GET') {
  $idTo = intval($request['query']['idTo']);

  $sqlListLikes =
  "SELECT l.createdAt, u.firstName, u.images
   FROM likes AS l
   JOIN users AS u
   ON l.idFrom = u.userId
   WHERE l.isLike = true AND l.idTo = $idTo";
   $resultObj = $link->query($sqlListLikes);
   $result = mysqli_fetch_all($resultObj, MYSQLI_ASSOC);
   $response['body'] = $result;
   send($response);
}


if($request['method'] === 'POST') {
  $idFrom = intval($request['body']['idFrom']);
  $idTo = intval($request['body']['idTo']);
  $isLike = $request['body']['isLike'];

  $sqlCheckExist =
  "SELECT * FROM likes AS l
   WHERE l.idFrom = $idFrom AND l.idTo = $idTo";
  $resultObj = $link->query($sqlCheckExist);
  $result = mysqli_fetch_assoc($resultObj);

  if(!$result) {
    $sqlLikes =
      "INSERT INTO likes (idFrom, idTo, isLike, createdAt)
   VALUES (?,?,$isLike,CURRENT_TIMESTAMP)";
    $stmt = $link->prepare($sqlLikes);
    $stmt->bind_param("dd", $idFrom, $idTo);
    $stmt->execute();
    $response['body'] = 'succefully insert';
  } else {
    $response['body'] = 'exist info';
  }

  send($response);
}
