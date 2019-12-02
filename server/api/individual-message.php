<?php
$link = get_db_link();
if($request['method'] === 'POST') {
  $message = $request['body']['message'];
  $idFrom = $request['body']['idFrom'];
  $idTo = $request['body']['idTo'];

  if(!$message) {
    throw new ApiError('Something wrong with request query', 400);
  } else {
    $sqlInsertMessage =
    "INSERT INTO messages (idFrom, idTo, message, createdAt)
     VALUES (?,?,?,CURRENT_TIMESTAMP)";
    $stmt = $link->prepare($sqlInsertMessage);
    $stmt->bind_param("dds", $idFrom, $idTo, $message);
    $stmt->execute();

    $sqlGetInsertMessage =
    "SELECT * FROM messages
     WHERE messages.idFrom = $idFrom AND messages.idTo = $idTo";
    $newMessageObj = $link->query($sqlGetInsertMessage);
    $newMessage = mysqli_fetch_assoc($newMessageObj);
    $response['body'] = $newMessage;
  }
  send($response);
}
