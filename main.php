<?PHP

function random_string($length = 10)
{
    $character = "1234567890abcdefghijklmnopqrstuvwxyz";
    $result = null;
    for($i = 0; $i < strlen($character); $i++)
    {
        $result .= $character[rand(0, strlen($character) - 1)];
    }
    return $result;
}