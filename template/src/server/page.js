export default body => `
<!DOCTYPE html>
<html>
    <head>
        <title>Whipo Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/app.css">
    </head>
    <body>
        ${body}
        <script type="module" src="/app.js"></script>
    </body>
</html>
`;
