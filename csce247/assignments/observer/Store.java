/*
 * By: Courtney Hockenberry
 */
package observer;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Store implements Observer{
    private Subject subject;
    private String title;
    private Queue<Book> bestSellers = new LinkedList<>();
    
    public Store(Subject subject) {
        this.subject = subject;
        subject.registerObserver(this);
    }
   @Override
    public void update(Book book) {
        //removes the oldest book if there are 5 books already
        if (bestSellers.size() >= 5){
            bestSellers.poll();
        }
            bestSellers.add(book);
        
    }
    public List<Book> getBestSellers() {
        return (List)this.bestSellers;
    }

}

