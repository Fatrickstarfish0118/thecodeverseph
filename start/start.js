document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById('editor');

    // Startup code to populate the textarea
    const startupCode = `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello, ka Coders!</h1>
    <p>This is a sample HTML code snippet.</p>
    <p>Feel free to modify and run your own code!</p>
</body>
</html>`;
    
    // Set the startup code in the textarea
    editor.value = startupCode;

    document.getElementById('run').addEventListener('click', function() {
        const output = document.getElementById('output');
        const htmlCode = editor.value;

        // Write the HTML code to the iframe
        output.srcdoc = htmlCode;
    });
});
