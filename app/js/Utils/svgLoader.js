/**
 * Created by Sergio on 3/26/2015.
 */

class svgLoader extends Snap.load {
    constructor(url, callback, scope){
        console.log("Canvas Loader Loaded");
        return super(url, callback, scope);
    }
}

export default svgLoader;