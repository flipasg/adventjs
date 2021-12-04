const hasInvalidChars = (gift) =>
  gift.indexOf('{') !== -1 || gift.indexOf('}') !== -1 || gift.indexOf('[') !== -1 || gift.indexOf(']') !== -1;

  const hasGiftWrapperChar = (gift) =>
  gift.indexOf('(') !== -1 || gift.indexOf(')') !== -1;

export default function isValid(letter){
  const gift = letter.match(/\(([^)]+)\)/)
  if(!gift || hasInvalidChars(gift[1]) || hasGiftWrapperChar(gift[1])){
    return false; 
  }
  return true;
}