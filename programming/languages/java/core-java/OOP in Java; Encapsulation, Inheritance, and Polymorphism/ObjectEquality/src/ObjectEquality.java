public class ObjectEquality {

	public static void main(String[] args) {
		String x = "JAC444";
		String y = "JAC444";
		String z = new String("JAC444");

		if (x == z)
			System.out.println("Ref Equal " + x + " " + z);
		else
			System.out.println("Ref Not Equal " + x + " " + z);

		if (x.equals(z))
			System.out.println("String Equal " + x + " " + z);
		else
			System.out.println("String Not Equal " + x + " " + z);
		
		//Now, check for x and y!
	}

}