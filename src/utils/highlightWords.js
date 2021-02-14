export const highlightWords = (summary, keywords) => {
  if (!summary || typeof summary !== 'string') return "No summary";
  if (!keywords) return summary;

  keywords = keywords.split(" ");
  return summary.replace(
    new RegExp(keywords.join("|"), "ig"),
    (word) => `<strong>${word}</strong>`
  );
}