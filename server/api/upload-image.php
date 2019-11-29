<?php

$link = get_db_link();

if($request['method'] === 'POST') {

  $imageName = time() . "." . $_FILES['image']['name'];

  $target = "../public/images/" . $imageName;

  move_uploaded_file($_FILES['image']['tmp_name'], $target);

  $response['body'] = $target;
  send($response);
}
