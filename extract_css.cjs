const fs = require('fs');
const html = fs.readFileSync('../GLP.html', 'utf8');
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
if (styleMatch) {
  fs.writeFileSync('./src/index.css', `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600;700&display=swap');\n\n` + styleMatch[1].trim());
  console.log('Extracted CSS to src/index.css');
} else {
  console.log('No <style> tag found');
}
