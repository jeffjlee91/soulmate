<?php

$link = get_db_link();

if($request['method'] === 'POST' && $request['body']['gender']==='Male') {
    $getAllFemaleUsersql = 'select * 
       from users
       where gender = "female"';
    $result = $link->query($getAllFemaleUsersql);
    $users = $result->fetch_all(MYSQLI_ASSOC);
    $response['body'] = $users;
    send($response);    
    } else if ($request['method'] === 'POST' && $request['body']['gender']==='Female') {
    $getAllMaleUsersql = 'select * 
       from users
       where gender = "male"';
    $result = $link->query($getAllMaleUsersql);
    $users = $result->fetch_all(MYSQLI_ASSOC);
    $response['body'] = $users;
    send($response);  
    }