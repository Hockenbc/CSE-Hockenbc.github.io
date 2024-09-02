/*
 * By: Courtney Hockenberry
 */
package observer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class FanReads implements Observer{
    private final Subject subject;
    private final Map<Genre, ArrayList<Book>> recommendations;

    public FanReads(Subject subject, String firstName, String lastName) {
        this.subject = subject;
        this.recommendations = new HashMap<>();

        subject.registerObserver(this);
    }

    @Override
    public void update(Book book) {
        //get the genre
        if(recommendations.get(book.getGenre())==null){
            ArrayList<Book> gl = new ArrayList<>();
            gl.add(book);
            recommendations.put(book.getGenre(), gl);
        }
        else{
            ArrayList<Book> gl = recommendations.get(book.getGenre());
            gl.add(book);
            recommendations.put(book.getGenre(), gl);
        }
    }
    public ArrayList<Book> getRecommendations(Genre genre) {
        return recommendations.get(genre);
    }
 
}

