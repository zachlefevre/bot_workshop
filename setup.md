# Introduction to The Windows CLI
## Terms
1. **Path**: The location in the filesystem corresponding to a resource.
    * _C:\Users\zachl\Documents\MSP\WS1\\_ is the path to this file on my hard drive.
    * *C:\Users\\* is the path which contains all of the user data on your machine.
1. **Directory**: A folder.
    * Folders end in *\\* (backslash) on Windows.
1. **File**: A file.
    * Files do not end in *\\*
    * A file can contain text (.txt), a webpage (.html), be executable (.exe), etc...
1. **Executable**: A file containing compiled code.
    * Executables are runnable.
    * Every command run from the command prompt is an executable. We will be using ```node```, ```cmd```, ```npm```, and others.
1. **Working Directory**: The context of an executable is very important. The working directory is the directory which the command prompt instance is currently *in*.
## Command Line Interface
1. How to use it, and what are the analogous actions within a GUI?
1. Type ```cmd``` into your search bar.
1. Run the *command prompt*
1. ```cd``` displays the current path
1. ```cd <path> ``` changes the working directory to that location.
1. ```dir``` lists all files and sub-directories in the working directory.
1. ```dir <path>``` lists all files and sub-directories inside *<path>*
1. ```cd ..``` changs the working directory to be the current directory's parent directory
1. Presing *tab* will auto-fill partial paths
1. Run (or execute) an executable by typing ```<name of executable>``` in the cmd.

# Install Node.js
1. Go to [the node.js website](https://nodejs.org/en/download/)
2. Download node for your platform
3. Install node
4. Test node by running:
    ```
    node -v
    ```
1. Test npm by running:
    ```
    npm
    ```
1. Congratulations. You've just run the *node* executable, and the *npm* executable. The node executable is found at *C:\Program Files\nodejs\node.exe*