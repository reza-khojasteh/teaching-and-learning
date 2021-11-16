import java.util.stream.Stream;

/**
* The StreamSample program implements a simple application utilizing Stream interface that:
* 1- simply returns a sequential ordered stream whose elements are the specified values - calling Stream.of("Hello", "Java"), 
* 2- then returns a stream consisting of the results of applying the given function (passed by lambda: s -> s + " world!" in here) to the elements of this stream,
* 3- and finally, performs an action (printing here) for each element of this stream (using method reference println of System.out)
*
* @author Reza Khojasteh
* @version 1.0
*/
public class StreamSample {
    public static void main(String[] args) {
        Stream.of("Hello", "Java")
                .map(s -> s + " world!")
                .forEach(System.out::println);
    }
}
