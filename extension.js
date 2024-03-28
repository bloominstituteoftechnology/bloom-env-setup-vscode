const vscode = require('vscode')
const validator = require('validator')
const md5 = require('md5')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand('bloom-env-setup.getHash', async function () {
    const rawEmail = await vscode.window.showInputBox({
      prompt: "Enter your email, please."
    })

    if (!rawEmail || !rawEmail.trim()) {
      vscode.window.showInformationMessage('No email was entered.')
      return
    }

    const email = rawEmail.trim()
    const isEmailValid = validator.isEmail(email)

    if (email && isEmailValid) {
      const hash = md5(email).slice(0, 8)
      vscode.window.showInformationMessage(`Your code: ${hash}`, 'Copy code to clipboard')
        .then(selection => {
          if (selection === 'Copy code to clipboard') {
            vscode.env.clipboard.writeText(hash).then(() => {
              vscode.window.showInformationMessage(`Code ${hash} copied to clipboard!`)
            })
          }
        })
    } else {
      vscode.window.showInformationMessage('No valid email was entered.')
    }
  })

  context.subscriptions.push(disposable)
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
