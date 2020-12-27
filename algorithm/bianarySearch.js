// bianary search is looking for the element according to half of the index...
function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];
    
    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key); 
        // splice method here strarting point and ending point. it takes secand half of the function
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
        // it takes first half of the fuction
    }
    else return false;
}
 
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
