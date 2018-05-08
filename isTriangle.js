function isTriangle(a,b,c)
{
    var result = false;

    // 숫자 값인지 체크
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return result;
    }

    // 양수인지 체크
    if (a < 0 || b < 0 || c < 0) {
        return result;
    }

    // a, b, c 중 제일 큰 값 구하기
    var maxLength = a;
    if (maxLength < b) {
        maxLength = b;
    }
    if (maxLength < c) {
        maxLength = c;
    }

    var others = a + b + c - maxLength;

    if (maxLength < others) {
        result = true;
    }

    return result;
}