/**
 * Created by Sergio on 3/26/2015.
 */

class jsonLoader {
    constructor(){
        this.request = null;
        this.result = null;
        this.callback = null;
    }

    fetch(type, url, cb){
    	var _this = this;

    	this.request = new XMLHttpRequest();
			
		//start request
		this.request.open(type, url, true);

		this.request.onload = function() {
			_this.onload();
		};

		this.request.onerror = function() {
			_this.onerror();
		};

		this.request.send();

		this.callback = cb;
    }
	
	onload() {
		if (this.request.status >= 200 && this.request.status < 400) {
		    // Success!
		    this.resp = this.request.responseText;

		    this.callback(this.resp);

		    console.log("Sucess");
		} else {
		   console.log("We reached our target server, but it returned an error"); 	
		}
	}

	onerror(){
		console.log("JSON ERROR");
	}
};

export default jsonLoader;