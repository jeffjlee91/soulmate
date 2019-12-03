<?php

$link = get_db_link();

if($request['method'] === 'POST' && $request['body']['gender']==='Male') {
    $sql = 'select * 
       from users
       where gender = "female"';
    $result = $link->query($sql);
    $users = $result->fetch_all(MYSQLI_ASSOC);
    $response['body'] = $users;
    send($response);    
    } else if ($request['method'] === 'POST' && $request['body']['gender']==='Female') {
    $sql = 'select * 
       from users
       where gender = "male"';
    $result = $link->query($sql);
    $users = $result->fetch_all(MYSQLI_ASSOC);
    $response['body'] = $users;
    send($response);  
    }

