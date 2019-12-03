<?php

$link = get_db_link();

if($request['method'] === 'GET') {
  $sqlgetAllUsers =
  "SELECT *
    FROM users";
  $stmt = $link->prepare($sqlgetAllUsers);
  $stmt->bind_param("s", $email);
  $stmt->execute();
  $allUsersObj = $stmt->get_result();
  $allUsersObj = mysqli_fetch_assoc($allUsersObj);

  send($response);
}
