import  root  from "../../filesystem/filesystem";

let fileroot = root;

export const ls = async (args: string[]): Promise<string> => {
    return '<p style="color: blue">'+fileroot.getFolders() + '</p> <p style="color: blue">'+ fileroot.getFiles() + '</p>';
};

export const mkdir = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Usage: mkdir [arg]

Args:

  - name: name of the folder

Example:

  mkdir test # to create a folder named test`;
    }

    fileroot.addFolder(args[0]);

    return "Folder created";
}

export const cd = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Usage: cd [arg]

Args:

  - name: name of the folder

Example:

  cd test # to change to the folder named test`;
    }

    if (args[0] === "..") {
        if (fileroot.getParent() === null) {
            return "Already in root";
        }
        fileroot = fileroot.getParent();
        return "Changed to parent folder";
    }

    const folder = fileroot.getFolder(args[0]);

    if (folder) {
        fileroot = folder;
    }else {
        return "Folder not found";
    }

    return "Folder changed";
}

export const pwd = async (args: string[]): Promise<string> => {
    return fileroot.name;
}

export const rm = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Usage: rm [arg]

Args:

  - name: name of the folder

Example:

  rm test # to remove the folder named test`;
    }

    const folder = fileroot.getFolder(args[0]);
    const file = fileroot.getFile(args[0]);

    if (folder) {
        fileroot.folders = fileroot.folders.filter((f) => f !== folder);
        return "Folder removed";
    }
    else if (file) {
        fileroot.files = fileroot.files.filter((f) => f !== file);
        return "File removed";
    }
    else {
        return "Folder or file not found";
    }

  }

export const cat = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Usage: cat [arg]

Args:

  - name: name of the file

Example:

  cat test # to show the content of the file named test`;
    }

    const file = fileroot.getFile(args[0]);

    if (file) {
        return file.content;
    }

    return "File not found";
}

export const touch = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Usage: touch [arg]

Args:

  - name: name of the file

Example:

  touch test # to create a file named test`;
    }

    fileroot.addFile(args[0]);

    return "File created";
}

export const echo = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        return `Usage: echo [arg]

Args:

  - name: name of the file
  - content: content of the file

Example:

  echo "Hello World" > test # to create a file named test with the content "Hello World"`;
    }

    const indexOfarrow2 = args.indexOf(">>");
    const indexOfarrow = args.indexOf(">");
    
    if (indexOfarrow2 != -1) {
        const content = args.slice(0, indexOfarrow2).join(" ");
        const name = args[indexOfarrow2 + 1];
        let file = fileroot.getFile(name);

        if (!file) {
            file = fileroot.addFile(name);
        }

        file.setContent(file.content + content);
        return "Content added to file";
    }

    if (indexOfarrow != -1) {
        const content = args.slice(0, indexOfarrow).join(" ");
        const name = args[indexOfarrow + 1];
        let file = fileroot.getFile(name);

        if (!file) {
            file = fileroot.addFile(name);
        }

        file.setContent(content);

        return "Content changed";
    }
    
    return args.join(" ");

}
