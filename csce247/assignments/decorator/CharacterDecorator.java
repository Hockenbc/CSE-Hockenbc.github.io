import java.util.ArrayList;

public abstract class CharacterDecorator extends Character{
    private Character character;

    public CharacterDecorator(Character character) {
        super(new ArrayList<>(), character.getName());
    }
}
