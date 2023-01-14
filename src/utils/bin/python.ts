export const python = async (args: string[]): Promise<string> => {
    if (args.length === 0) {
        window.open('/python.html');
        return 'Opening python interpreter...';
    }

    window.open('/python-editor.html');
    return 'Opening python...';
};

export const turtle = async (args: string[]): Promise<string> => {
    
    window.open('/python-turtle.html');
    return 'Opening python...';
};

