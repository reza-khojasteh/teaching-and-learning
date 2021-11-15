import java.util.stream.IntStream;

public class IntStreamSample {
    public static void main(String[] args) {
        IntStream.of(1, 2, 3).filter(i -> i % 2 == 0).forEach(System.out::println);
    }
}
