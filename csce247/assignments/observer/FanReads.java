package observer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FanReads implements Observer{
    private final Subject subject;
    private final String firtName;
    private final String lastName;
    private final Map<Genre, ArrayList<Book>> recommendations;

    public FanReads(Subject subject, String firstName, String lastName) {
        this.subject = subject;
        this.firstName = firstName;
        this.lastName = lastName;
        this.recommendations = new HashMap<>();

        for (Genre genre : Genre.values()) {
            recommendations.put(genre, new ArrayList<>());
        }
        subject.registerObserver(this);
    }

    public void update(Book book) {
        //get the genre
        Genre genre = book.getGenre();
        ArrayList<Book> genreList = recommendations.get(genre);
        if (genreList != null) {
            genreList.add(book);
        }
        System.out.println("Updated recommendations with: " + book);
    }
    public ArrayList<Book> getRecommendations(Genre genre) {
        return recommendations.getOrDefault(genre, new ArrayList<>());
    }
    public String toString() {
        return firstName + " " + lastName;
    }
    
}
