module Patterns {

    class Simple {

        var p:string;

        method Match(s: string) returns (b: bool) 
            requires |p| == |s|
            ensures b <==> forall n :: 0 <= n < |s| ==> 
                    s[n] == p[n] || 
                    p[n] == '?'
        { 
            var i := 0;
            while (i < |s|) 
                invariant i <= |s|
                invariant forall n :: 0 <= n < i ==> 
                    s[n] == p[n] || 
                    p[n] == '?'
            {
                if (s[i] != p[i]) {
                    return false;
                } 
                i := i + 1;
            }
            return true;
        }
    }

}