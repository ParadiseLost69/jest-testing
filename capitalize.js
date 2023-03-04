export default function capitalize(string) {
  const word = string.toLowerCase();
  return word[0].toUpperCase() + word.slice(1);
}
