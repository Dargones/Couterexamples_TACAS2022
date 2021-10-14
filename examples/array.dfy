method test(a:array2?<int>) 
    requires a != null 
{
    assert a.Length0 < 2 || 
        a.Length1 < 2 || 
        a[1,1] != 3;
}