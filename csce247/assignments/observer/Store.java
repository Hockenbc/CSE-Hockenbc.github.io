package observer;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.stream.Collectors;

public class Store implements Observer{
    private final Subject subject;
    private final String title;
    private final Queue<Book> bestSellers = new LinkedList<>();
    
    public Store(Subject subject) {
        this.subject = subject;
        this.title = "This Stores Best Sellers";
        subject.registerObserver(this);
    }

    public void update(Book book) {
        //removes the oldest book if there are 5 books already
        if (bestSellers.size() >= 5){
            bestSellers.poll();
        }
        bestSellers.add(book);
        System.out.println("updated best seller list with" + book);
    }
    public List<Book> getBestSellers() {
        return bestSellers.stream().collect(Collectors.toList());
    }

}

