public class ObjectEquality {
	
	public static void main(String[] args) {
		String x = "1";
		String y = new String("1");// check for String y = "1";

		if (x == y)
			System.out.println("Equal");
		else
			System.out.println("Not Equal");
	}

}
