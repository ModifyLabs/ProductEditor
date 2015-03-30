/**
 * Created by Sergio on 3/27/2015.
 */
import jsonLoader from 'utils/jsonLoader';

class Colors {
    constructor(){
    	var _this = this;
    	console.log("Colors Loaded");

    	//Get Colors From json config
    	this.colors = null;

    	//Get JSON rules for tag
        var jsonFetch = new jsonLoader;
        var result = jsonFetch.fetch('GET','json/config.json', function(e){
        	var _json = JSON.parse(e);
           _this.colors = _json.colors;

           _this.drawColorSwatches();
        });

    }

    drawColorSwatches(){
    	for (var i = this.colors.length - 1; i >= 0; i--) {
    		var newDiv = document.createElement("div"); 
    		newDiv.style.background = this.colors[i];
  			var newContent = document.createTextNode(this.colors[i]); 
  			newDiv.appendChild(newContent); //add the text node to the newly created div. 

    		document.body.appendChild(newDiv);
    	};
    	
    }


}

export default Colors;