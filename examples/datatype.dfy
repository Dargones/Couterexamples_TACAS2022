module M {

    datatype DType = A(i:int)

    method test(d:DType) {
        assert d.i > 4;
    }
}