<?php
/* Set e-mail recipient */
$myemail  = "gaby.campagna@yahoo.com";

/* Check all form inputs using check_input function */
$name           = check_input($_POST['name'], "Contact Name");
$organization  = check_input($_POST['organization']);
$title         = check_input($_POST['title']);
$address       = check_input($_POST['address']);
$city          = check_input($_POST['city']);
$state         = check_input($_POST['state']);
$zip           = check_input($_POST['zip']);
$phone         = check_input($_POST['phone']);
$fax           = check_input($_POST['fax']);
$email         = check_input($_POST['email']);


/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}

/* Let's prepare the message for the e-mail */
$subject = "Armed for Success Sponsors

Contact Name: $name
Organization: $organization
Title: $title
Address: $address
City: $city
State: $state
Zip or Postal Code: $zip
Phone: $phone
Fax: $fax
Email: $email

End of message
";

/* Send the message using mail() function */
mail($myemail, $subject, $name, $organization, $title, $address, $city, $state, $zip, $phone, $fax, $email);

/* Redirect visitor to the thank you page */
header('Location: thankyou.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<table width="599" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr> 
    <td><b><font color="#663333" size="3" face="Arial, Helvetica, sans-serif">Please 
      correct the following error:</font></b><br> <?php echo $myError; ?> </td>
  </tr>
  <tr>
    <td><font color="#663333" size="2" face="Arial, Helvetica, sans-serif"><strong><a href="sponsors.html"> 
      Back to form</a></strong></font></td>
  </tr>
</table>
</body>
    </html>
	
<?php
exit();
}
?>
