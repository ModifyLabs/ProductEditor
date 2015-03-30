/**
 * Created by Sergio on 3/26/2015.
 */

class svgLoader extends Snap.load {
    constructor(){
        console.log("SVG Loaded");
        return super(...arguments);
    }
}

export default svgLoader;