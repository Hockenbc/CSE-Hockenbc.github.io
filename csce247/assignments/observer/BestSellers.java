package observer;

import java.util.ArrayList;
import java.util.List;

public class BestSellers implements Subject{
    private final List<Observer> observer = new ArrayList<>();
    private final List<Book> bestSellers = new ArrayList<>();

    public BestSellers(){

    }

    public void registerObserver(Observer observer){
        if(!observers.contains(observer)) {
            observers.add(observer);
        }
    }

    public void notifyObservers(Book book) {
        for (Observer observer : observer) {
            observer.update(book);
        }
    }

    public void addBook(String title, Genre genre, String authorFirstName, String authorLastName, String description){
        Book book = new Book(title, genre, authorFirstName, authorLastName, description);
        bestSellers.add(book);
        notifyObservers(book);
    }


    public List<Book> getBestSellers() {
        return new ArrayList<>(bestSellers);
    }
}
