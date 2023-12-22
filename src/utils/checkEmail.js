function isEmail(str) {
  // Biểu thức chính quy để kiểm tra địa chỉ email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

export default isEmail;
