package observer;

public class Book{
    private final String title;
    private final Genre genre;
    private final String authorFirstName;
    private final String authorLastName;
    private final String description;
    
    //constructor
    public Book(String title, Genre genre, String authorFirstName, String authorLastName, String description){
        this.title = title;
        this.genre = genre;
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName;
        this.description = description;
    }

    public String getTitle(){
        return title;
    }
    public Genre getGenre(){
        return genre;
    }
    public String getAuthorFirstName(){
        return authorFirstName;
    }
    public String getAuthorLastName(){
        return authorLastName;
    }

    public String toString(){
        return String.format("----- %s-----\n%s by: %s %s\n%s",
        title,
        genre,
        authorFirstName,
        authorLastName,
        description);
    }
}
