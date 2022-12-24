# A highly reusable input that is being constantly updated. 

The input support many different style props that allow you to customize the look of the search bar fairly easily. I'm constantly updating this project adding more styles and customizability.

## Style props

All style props are passed to the input via a object prop called **config**.

The input would look like this: 

```<Input config={{}} />```

These are the props that are currently supported:

* ```placeholder``` - To specify placeholder text. The default is 'Enter text'
* ```placeholderWeight``` - To specify placeholder text. The default is the standard font weight.
* ```placeholderColor``` - To specify placeholder text. The default is HEX value ```#ffffff```
* ```fontWeight``` - To change the weight of the text the user types. The default is the standard font weight. 
* ```backgroundColor``` - To change the background color of the input container. - The default is ```transparent```.
* ```width``` - To change the width of the input container when opened. The default is ```300px``` opened, and ```60px``` closed.
* ```border``` - To change the border style of the input container. The default is ```2px solid #ffffff33```
* ```searchButtonColor``` - To change the color of the search icon (the magnifying glass). The default is HEX value ```#000```
* ```searchButtonColorHover``` - To change the color of the search icon (the magnifying glass) when hovering. The default is HEX value ```#000```
* ```searchButtonContainerColor``` - To change the color of the search icon container. The default is HEX value ```#ffffff```
* ```searchButtonContainerColorHover``` - To change the color of the search icon container when hovering. The default is HEX value `#000`



👩‍💻 Live demo: https://growable-search-bar.vercel.app/

⚙️ Live code here: https://githubbox.com/keiryan/growable-search-bar
