//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.


function sortAsc(a,b) {
    return a-b;
}

nums1.sort(sortAsc);

console.log(`nums1 ascending: ${nums1}`);

//Sort each array in descending order.

function sortDesc(a,b) {
    return b-a;
}

nums1.sort(sortDesc);
console.log(`nums1 descending: ${nums1}`)