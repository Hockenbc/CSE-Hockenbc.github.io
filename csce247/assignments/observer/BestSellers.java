/*
 * By: Courtney Hockenberry
 */
package observer;

import java.util.ArrayList;
import java.util.List;

public class BestSellers implements Subject{
    private final List<Observer> observers = new ArrayList<>();
    private final List<Book> bestSellers = new ArrayList<>();
    

    public BestSellers(){

    }

    public void registerObserver(Observer observer){
        if(!observers.contains(observer)) {
            observers.add(observer);
        }
    }
    public void removeObserver(Observer observer){
        observers.remove(observer);
    }

    public void notifyObservers(Book book) {
        for (Observer observer : observers) {
            observer.update(book);
        }
    }

    public void addBook(String title, Genre genre, String authorFirstName, String authorLastName, String description){
        Book book = new Book(title, genre, authorFirstName, authorLastName, description);
        bestSellers.add(book);
        notifyObservers(book);
    }
}
