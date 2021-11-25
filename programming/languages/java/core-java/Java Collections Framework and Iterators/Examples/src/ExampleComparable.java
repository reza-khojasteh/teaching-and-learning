//The Arrays contains various static methods for manipulating arrays (such as sorting and searching).
import java.util.Arrays;

public class ExampleComparable {

	public static void main(String[] args) {
		OperatingSystem[] oss = {
				new OperatingSystem("Windows", 8.00f),
				new OperatingSystem("Windows", 7.00f),
				new OperatingSystem("Ubuntu", 12.04f),
				new OperatingSystem("Ubuntu", 14.04f),
				new OperatingSystem("Linux", 6.32f),
				new OperatingSystem("Android", 4.44f) };
		
        Arrays.sort(oss);
        for(OperatingSystem os: oss)
        	System.out.println(os);
	}

}
