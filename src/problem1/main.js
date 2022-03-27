var sum_to_n_a = function(n) {
    //For Loop 
    var sum = 0;
    for(var i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
};

var sum_to_n_b = function(n) {
    // Formular of sum to n
    return n*(n+1)/2;
};

var sum_to_n_c = function(n) {
    // Recursive 
    if(n==1){
        return 1;
    }
    return sum_to_n_c(n-1) + n;
};