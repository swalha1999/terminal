import figletAlice from 'figlet';

export const figlet = async (args: string[]): Promise<string> => {
    
    let outdata :string ;
    figletAlice.text(args.join(' '),(err,data)=>{
        if(err){
            console.log('Something went wrong...');
            console.dir(err);
            return;
            }
            outdata = data;
        });
        
    return outdata;
}