# Bloomtech Environment Setup Extension Quickstart

## Overview

This quickstart guide is for developers looking to understand or contribute to the Bloomtech Environment Setup Extension. The extension prompts users to enter their email, validates it, and then generates a hash code which can be copied to the clipboard.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Visual Studio Code](https://code.visualstudio.com/) (latest stable version)

## Getting Started

1. Clone the repository to your local machine.
2. Navigate into the cloned directory.
3. Run `npm install` to install the dependencies.

## Running the Extension

1. Open the project in Visual Studio Code.
2. Press `F5` to open a new window with your extension loaded.
3. Invoke your command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`), by typing `Bloomtech Setup Confirmation Code`.
4. Enter an email address when prompted to see the generated hash code.

## Testing the Extension

Ensure the following functionalities work as expected:
- Email input prompt opens.
- Email validation checks for correctly formatted email addresses.
- Hash code generation is correct and consistent for the same email.
- `Copy code to clipboard` button copies the hash to the clipboard.

## Debugging

You can debug your extension in VS Code by setting breakpoints and pressing `F5` to launch the Extension Development Host. Output and debug information will appear in the Debug Console.

## Contributing

Please read our contributing guidelines for information on how to report issues or submit pull requests.

## Publishing Changes

When you're ready to publish changes, update the version number in `package.json` according to semantic versioning, and follow the instructions on [publishing a Visual Studio Code extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension).

## Additional Resources

- [Visual Studio Code API](https://code.visualstudio.com/api/references/vscode-api)
- [validator.js](https://github.com/validatorjs/validator.js) for email validation logic.
- [md5.js](https://github.com/pvorb/node-md5) for hash generation logic.

## Support

If you encounter any issues or require assistance, please contact the support team at [support@bloomtech.com](mailto:academicsupport@bloomtech.com).

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE.md) file for details.
