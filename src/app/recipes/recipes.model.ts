export class Recipes{
    public recipeName: string;
    public recipeDesc: string;
    public recipeImg: string;

    constructor(name:string,desc:string,imgurl:string){
        this.recipeName = name;
        this.recipeDesc =desc;
        this.recipeImg =imgurl;
    }

}