export const help = async (args: string[]): Promise<string> => {
    // const commands = Object.keys(bin).sort().join(', ');
    // return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
    ///\n  <p style="color: red"> try: </p>   cv
    return `
type any of the following commands without arguments to get examples and usage:

<table style="width:80%">
  <tr>
    <th style="color: green">Command</th>
    <th>Explanation</th>
  </tr>

<tr>
    <td style="color: green">cv</td>
    <td> get my cv.<td>
</tr>
<tr>
    <td style="color: green">about</td>
    <td> get information about the me and the project.<td>
</tr>
<tr>
    <td style="color: green">linkedin</td>
    <td> get my linkedin profile.<td>
</tr>
<tr>
    <td style="color: green">github</td>
    <td> get my github profile.<td>
</tr>
<tr>
    <td style="color: green">instagram</td>
    <td> get my instagram profile.<td>
</tr>
<tr>
    <td style="color: green">cowsay</td>
    <td> print a message in a cow.<td>
</tr>
<tr> 
    <td style="color: green">figlet</td>
    <td> print a message in ascii art.<td>
</tr>
<tr>
    <td style="color: green">weather</td> 
    <td> get the weather of a city.<td>
</tr>
<tr>
    <td style="color: green">theme</td>
    <td> change the theme.<td>
</tr>
<tr>
    <td style="color: green">evl</td>
    <td> evaluate math expressions.<td>
</tr>
<tr>
    <td style="color: green">der</td>
    <td> dervitave of math expressions.<td>
</tr>
<tr>
    <td style="color: green">tex</td>
    <td> convert math expressions to tex format.<td>
</tr> 
<tr>
    <td style="color: green">clear</td>
    <td> clear the terminal.<td>
</tr>
<tr>
    <td style="color: green">ls</td>
    <td> list all files and directories.<td>
</tr>
<tr>
    <td style="color: green">cd</td>
    <td> change directory.<td>
</tr>
<tr>
    <td style="color: green">pwd</td>
    <td> print working directory.<td>
</tr>
<tr>
    <td style="color: green">mkdir</td>
    <td> create a directory.<td>
</tr>
<tr>
    <td style="color: green">cat</td>
    <td> print the content of a file.<td>
</tr>
<tr>
    <td style="color: green">touch</td>
    <td> create a file.<td>
</tr>
<tr>
    <td style="color: green">rm</td>
    <td> remove a file or directory.<td>
</tr>
    `;

  };
  