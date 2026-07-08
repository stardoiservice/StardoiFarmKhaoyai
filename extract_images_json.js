const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\ndrs-admin\\.gemini\\antigravity\\brain\\af129c0f-9096-453f-b7f8-bec89f29198d\\.system_generated\\steps\\106\\content.md', 'utf8');

// Find all URLs matching scontent
const regex = /https:\/\/scontent[^\s"'()<>\\,]+fbcdn\.net[^\s"'()<>\\,]+/g;
const matches = content.match(regex) || [];

// Clean up HTML entities like &amp;
const cleanMatches = matches.map(url => url.replace(/&amp;/g, '&'));
const unique = [...new Set(cleanMatches)];

console.log(`Found scontent URLs: ${unique.length}`);
unique.forEach((url, i) => {
  console.log(`URL ${i + 1}: ${url}`);
});
