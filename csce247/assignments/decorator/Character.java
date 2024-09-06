
import java.util.*;

public class Character {
    private String name = "none";
    protected ArrayList<String> lines;

    public Character (ArrayList<String> lines,String name) {
        this.name = name;
        if(lines!=null){
            this.lines = lines;
        }
    }

    public String getName(){
        return name;
    }

    public String toString(){
        return "---" +name+ "---\n"+lines.toString();
    }
    

}