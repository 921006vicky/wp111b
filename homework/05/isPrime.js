function isPrime(n)
{
    if(n<=1)
    {
        return false
    }
    for(var c=2;c<=Math.sqrt(n);c++)
    {
        if(n%c===0)
        {
            return false
        }
    }
    return true
}

console.log(isPrime(101))
