const palindromes = function (str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // 2. Dùng 2 con trỏ chạy từ 2 đầu vào giữa
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false; // Phát hiện không đối xứng -> Dừng ngay
    }
    left++;
    right--;
  }

  return true;

};

// Do not edit below this line
module.exports = palindromes;
