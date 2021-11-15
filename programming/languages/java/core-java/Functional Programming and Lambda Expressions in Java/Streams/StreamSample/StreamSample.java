import java.util.stream.Stream;

public class StreamSample {
    public static void main(String[] args) {
        Stream.of("hello", "great")
                .map(s -> s + " world")
                .forEach(System.out::println);
    }
}
