const ejs = require('ejs');
const fs = require('fs-extra');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const outputDir = path.join(__dirname, 'dist');

const pages = [
    { template: 'index.ejs', output: 'index.html' },
    { template: 'analytics.ejs', output: 'analytics.html' },
    { template: 'predictions.ejs', output: 'predictions.html' },
];




const renderPage = async (template, output) => {
    try {
        const content = await ejs.renderFile(path.join(viewsDir, template), {
            weather: { temperature: 25, weather: 'Sunny' },
            currentTime: new Date().toLocaleString(),
            sensorData: { temperature: 22, moisture: 55, humidity: 60, ph: 7 },
            predictions: {
                predictions6Hours: { temperature: 23, moisture: 54, humidity: 59, ph: 7.1 },
                predictions12Hours: { temperature: 24, moisture: 53, humidity: 58, ph: 7.2 },
                predictions24Hours: { temperature: 25, moisture: 52, humidity: 57, ph: 7.3 }
            }
        });
        await fs.outputFile(path.join(outputDir, output), content);
        console.log(`Rendered ${output}`);
    } catch (err) {
        console.error(`Error rendering ${template}:`, err);
    }
};

// Copy static assets
const copyAssets = async () => {
    await fs.copy(path.join(__dirname, 'public'), path.join(outputDir, 'public'));
    console.log('Copied static assets');
};

const renderAllPages = async () => {
    await fs.emptyDir(outputDir);
    await copyAssets();
    for (const page of pages) {
        await renderPage(page.template, page.output);
    }
};

renderAllPages();
