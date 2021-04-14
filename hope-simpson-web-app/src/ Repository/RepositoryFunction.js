export function createRandomNumber(start,length,negAccept){
    var random=((Math.floor(Math.random() * 2)==0)?1:negAccept?-1:1)*(Math.floor(Math.random() * length)+start);
    return random;

}
