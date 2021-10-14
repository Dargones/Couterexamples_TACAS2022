Please note that this artifact will likely be updated sometime prior to the November 4th submission deadline. 

# Installation Instructions

- Place the contents of this directory in the home directory.

- Install .NET 5.0 by running `sudo dpkg -i ~/dependencies/net/*`

- Launch Visual Studio Code (VSC) by running `VSCode-linux-x64/code`

- Install Dafny plugin for VSC by going to the extension panel (on the left), opening the "Views and More Actions" dropdown widget (click on the elipsis) and choosing "install from VSIX" option. Proceed to select ~/dependencies/correctnessLab.dafny-vscode-1.8.0.vsix

- Edit the Dafny extension settings so that the Language Server Runtime Path points to ~/artifact/dafny/Binaries/DafnyLanguageServer.dll and the compiler Runtime Path points to ~/artifact/dafny/Binaries/Dafny.dll Make sure that Dotnet Executable Path is set to /usr/bin/dotnet

# Replicating the Results

To replicate the results, open Visual Studio Code IDE by running `VSCode-linux-x64/code` and use File -> Open Folder to open the `examples` directory shipped with this artifact. Each file in this directory is a Dafny program with a failing assertion and corresponds to examples in Table 1 and Figure 1 from the paper. To generate counterexamples in each case, use right-hand click and choose "Show CounterExample" or, alternatively, press F7.