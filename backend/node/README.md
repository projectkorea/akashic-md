# Node.js Snippets

## Environment Variables & Debugging

```bash
NODE_ENV=production node index.js
NODE_DEBUG=http node index.js
```

- **`NODE_ENV=production`**: Sets the environment to production when running the app.
- **`NODE_DEBUG=http`**: Enables debug logging for HTTP-related code.

## `process.argv`

```js
node index.js dumpall junha

console.log(process.argv);
// Output:
// [0]: '/path/to/node'
// [1]: '/path/to/script.js'
// [2]: 'dumpall'
// [3]: 'junha'
```

- `process.argv` is an array containing the command-line arguments passed when the Node.js process is launched.
  - **[0]**: Full path to the Node executable.
  - **[1]**: Full path to the script being executed.
  - **[2] and onward**: Additional command-line arguments.

## Serving Static Files with Express

```js
app.use('/public', express.static(__dirname + '/public'));
// This middleware handles requests to the '/public' route.
// It serves static files from the directory located at __dirname + '/public'.
```

- **`/public`**: The URL path where static files will be served.
- **`express.static`**: Middleware to serve static files, like HTML, CSS, JavaScript, etc.
- **`__dirname`**: Represents the absolute path of the directory containing the executing script.

## Module Systems: CommonJS vs ES Modules

### CommonJS

```js
console.log(__filename); // Example: /Users/username/project/example.js
console.log(__dirname);  // Example: /Users/username/project
```

- **`__filename`**: The absolute path of the currently executing file.
- **`__dirname`**: The directory name of the currently executing script.

### ES Modules

```js
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename); // Similar to CommonJS, absolute path to the file.
console.log(__dirname);  // Similar to CommonJS, directory of the current file.
```

- **`fileURLToPath(import.meta.url)`**: Converts the `import.meta.url` (file URL) into a file path.
- **`dirname(__filename)`**: Retrieves the directory name of the current module.
