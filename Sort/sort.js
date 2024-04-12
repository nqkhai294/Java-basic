console.log("Hello");

// Sort cài đặt 2 biến số đầu vào, xét hiệu 2 số, ví dụ là a-b
// Nếu là gtri âm: a đứng trước b
// Nếu là giá trị dương: a đứng sau b
// Nếu là 0 => a và b là bằng nhau

let arrays = [1, 30, 21, 4];

arrays.sort((a, b) => a - b);

console.log(arrays); // Mảng tăng dần

arrays.sort((a, b) => b-a);

console.log(arrays); //Mang giam dan


/* Lodash: Công cụ giúp Arrays

*/

console.log("Nhớ tự tìm hiểu lodash nhé!")
