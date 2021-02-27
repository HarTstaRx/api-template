const path = require('path');
const { Extractor, ExtractorConfig }  = require('@microsoft/api-extractor');

const apiExtractorJsonPath = path.join(__dirname, '../config/api-extractor.json');
// Load and parse the api-extractor.json file
const extractorConfig = ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);
// Invoke API Extractor
const extractorResult = Extractor.invoke(extractorConfig, {
    // Equivalent to the "--local" command-line parameter
    localBuild: false,
    // Equivalent to the "--verbose" command-line parameter
    showVerboseMessages: true
});
if (extractorResult.succeeded) {
    console.log('API Extractor completed successfully');
    process.exitCode = 0;
}
else {
    console.error(`API Extractor completed with ${extractorResult.errorCount} errors`
        + ` and ${extractorResult.warningCount} warnings`);
    process.exitCode = 1;
}

