/**
 * Created by Sergio on 3/25/2015.
 */

//From Engine Utils
import jsonLoader from 'utils/jsonLoader';
import svgLoader from 'utils/svgLoader';
import canvasLoader from 'utils/canvasLoader';


//ENGINE
import Colors from "engine/colors";



class Main {
    constructor() {

        // initializes the canvas based on passed id param
        this.canvas = new canvasLoader("#mainCanvas");
        this.colors = new Colors;

        this.options = {};
        this.init();
    }

    init() {

        this.tag = new svgLoader("svg/tag.svg", function(f){

            this.options.firstName = f.select("text[id=firstName]");
            this.canvas.append(this.options.firstName);

            this.options.lastName = f.select("text[id=lastName]");
            this.canvas.append(this.options.lastName);

            this.options.dateText = f.select("text[id=date]");
            this.canvas.append(this.options.dateText);


            this.canvas.append(f.select("g"));
        }, this);
        
        console.log(this);
    }
}

window.ProductEditor = new Main;