function solve(a,b) {
    if (a.length != b.length) return 0;

    var f = [];
    for (var i = 0; i <= b.length; ++i) {
      f[i] = [];
      for (var j = 0; j <= b.length; ++j) {
        f[i][j] = [];
      }
    }
    for (var startA = 0; startA <= a.length; ++startA) {
      for (var startB = 0; startB <= b.length; ++startB) {
        f[0][startA][startB] = 1;
      }
    }

    for (var L = 1; L <= a.length; ++L) {
      for (var startA = 0; startA <= a.length; ++startA) {
        for (var startB = 0; startB <= b.length; ++startB) {
          f[L][startA][startB] = 0;
        }
      }
      for (var startA = 0; startA + L - 1 < a.length; ++startA) {
        for (var startB = 0; startB + L - 1 < b.length; ++startB) {
          var endA = startA + L - 1;
          var endB = startB + L - 1;

          f[L][startA][startB] = 0;
          if (a[startA] == b[endB])
            for (var l = 0; l < L; ++l) {
              f[L][startA][startB] += f[l][startA+1][startB] * f[L-1-l][startA+1+l][startB+l];
            }
        }
      }
    }
    return f[a.length][0][0];
  }