import java.util.Arrays;

public class ExampleArrays {

	public static void main(String[] args) {
		String[] oss = {"Windows", "Unix", "MacOS", "Andorid", "Linux"};

		Arrays.sort(oss);
		for (String os : oss)
			System.out.println(os);
	}
}
