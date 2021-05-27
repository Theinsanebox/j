<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="ChattingWebApp.css">
    <link rel="icon" href="j(48).png">
    <script src="jquery-3.6.0.min.js"></script>
    <script src="ChattingWebApp.js"></script>
    <title>Sign up</title>
</head>
<body>
    

    <div class="tblgin">

        <form method="POST" action="ChattingWebApp.php">
        <table class="logintable">

            <tr>
                <td>
                    <label for="username"> Username </label>
                </td>
            </tr>
            <tr>
                <td>
        <input type="text" class="liname  p-name" name="username" id="username">
                </td>
            </tr>
        
        
     
        
        
        
        
            <tr>
                <td>
                    <label for="password"> Password </label>
                </td>
            </tr>
            <tr>
                <td>
        <input type="password" class="p-name" name="password" id="password">
                </td>
            </tr>
        
        
        
         
        
<tr>
    <td>
        <br>
    </td>
</tr>
            <tr>
                <td>
                    <input type="submit" value="Submit" class="prfbtn">
                </td>
            </tr>
        </table>
        </form>
    </div>



</body>
</html>



<!-- 
<?php

$username = $_POST['username'];
$password = $_POST['password'];

$connect = mysqli_connect('localhost','root','','letstalk');

$query = "INSERT INTO `login`(`username`,`password`) VALUES('$username','$password')";

$final = mysqli_query($connect,$query);

?> -->