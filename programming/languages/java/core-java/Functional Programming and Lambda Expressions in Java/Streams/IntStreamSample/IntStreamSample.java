import java.util.stream.IntStream;

/**
* The IntStreamSample program implements a simple application utilizing IntStream interface that:
* 1- simply returns a sequential ordered stream whose elements are the specified values - by calling Stream.of(1, 2, 3), 
* 2- then returns a stream consisting of the elements of the currently formed stream that match the given - implemented with lambda: i -> i % 2 == 0, 
* 3- and finally, performs an action (printing here) for each element of this stream (using method reference println of System.out)
*
* @author Reza Khojasteh
* @version 1.0
*/
public class IntStreamSample {
    public static void main(String[] args) {
        IntStream.of(1, 2, 3).filter(i -> i % 2 == 0).forEach(System.out::println);
    }
}
