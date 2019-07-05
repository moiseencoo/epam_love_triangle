/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 * 
 * ¯\_(ツ)_/¯ 
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    let preferences_length = preferences.length; 
    let count = 0;

    for (let i = 1; i <= preferences_length; i++){

        let spichonees_one = preferences[i - 1]; 
        let spichonees_two = preferences[spichonees_one - 1]; 
        let spichonees_three = preferences[spichonees_two - 1]; 

        if (i == spichonees_three) {
          count++; 
        }

    }

    return Math.floor(count / 3);

};

