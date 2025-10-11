function isAnagram(str1, str2) {
  //  Normalize both strings: lowercase + remove spaces
  const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) return false;

  const sorted1 = cleanStr1.split('').sort().join('');
  const sorted2 = cleanStr2.split('').sort().join('');

  //  Return true if they match
  return sorted1 === sorted2;
}

// Examples
console.log(isAnagram("Astronomer", "Moon starer"));   // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("Hello", "Olelh")); // true
console.log(isAnagram("Test", "Taste")); // false
