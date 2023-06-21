const checkGender = (gender) => {
  const maleVariants = ['male', 'm', 'man', 'boy'];
  return maleVariants.includes(gender.toLowerCase());
};
export default checkGender;
