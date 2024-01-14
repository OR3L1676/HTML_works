const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

const slice = combined.slice(2, 4); // cuting from index 2-4 so index 2, 3 but no 4
const slice1 = combined.slice(2); // cutting indexs 0-1 and save the arr from index 2
const slice2 = combined.slice(); // copy all the arr

console.log(combined);
console.log(slice);
console.log(slice1);
console.log(slice2);

// better way to combine a arr and even add some values
const combined1 = [...first, 'a', ...second, 'b'];
console.log(combined1);

// better way to copy arr
const copy = [...combined1];
