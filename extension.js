const vscode = require('vscode')
const validator = require('validator')
const md5 = require('md5')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand('bloom-env.getHash', async function () {
    const rawEmail = await vscode.window.showInputBox({
      prompt: "Enter your email, please."
    })

    if (rawEmail === null) {
      vscode.window.showInformationMessage('No email was entered.')
      return
    }

    const email = rawEmail.trim()
    const isEmailValid = validator.isEmail(email)

    if (email && isEmailValid) {
      vscode.window.showInformationMessage(`Your magic code: ${md5(email).slice(0, 10)}`)
    } else {
      vscode.window.showInformationMessage('No valid email was entered.')
    }
  })

  context.subscriptions.push(disposable)
}

function deactivate() { }

module.exports = {
  activate,
  deactivate,
}
