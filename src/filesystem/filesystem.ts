// class to save file names and add new files to the list

class Folder {
    public folders: Folder[] = [];
    public files: Files[] = [];
    public parent: Folder | null = null;
    constructor(public name: string, parent?: Folder) {
        this.name = name;
        this.parent = parent || null;
    }

    public addFolder(name: string): void {
        const file = new Folder(name, this);
        this.folders.push(file);
    }
    
    public getFolders(): string | null {
        let result = this.folders.map((folder) => folder.name).join('  ');
        return result;
    }

    public getParent(): Folder | null {
        return this.parent;
    }

    public getFolder(name: string): Folder | null {
        const folder = this.folders.find((folder) => folder.name === name);
        return folder;
    }

    public addFile(name: string): Files {
        const files = new Files(name, "");
        this.files.push(files);
        return files;
    }

    public getFiles(): string | null {          
        let result = this.files.map((file) => "*"+file.name).join('  ');
        return result;
    }

    public getFile(name: string): Files | null {
        const files = this.files.find((file) => file.name === name);
        return files;
    }

  }

class Files {
    constructor(public name: string, public content: string) {
        this.name = name;
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }


}

const root = new Folder('');

export default root;


