function matrixProduct(mat1,mat2){
    let result = [];
    for(i=0; i<mat1.length;i++){
        let newRow = [];
        for(j=0; j<mat2[0].length;j++){
            let product =0;
            for(x=0; x<mat1[i].length;x++){
                product += mat1[i][x]*mat2[x][j];
            }
            newRow.push(product);
        }
        result.push(newRow);
    }
    return result;
}

function sumOfMatrices(mat1,mat2){
    let result = [];
    for(i=0; i<mat1.length;i++){
        let newRow = [];
        for(j=0;j<mat1[0].length;j++){
            let sum = 0;
            sum = mat1[i][j]+mat2[i][j];
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

function sumOfArray(arr){
    let sum = 0;
    for(i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
function sumOfEachRow(mat){
    let result = [];
    for(j=0; j<mat.length; j++){
        result[j] = sumOfArray(mat[j]);
    }
    return result;
}


module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfArray,
    sumOfEachRow
}