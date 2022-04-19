public class GenericsMethods {

	// An example of using Generics in methods
	public static <T> boolean isEqual(GenericsType<T> g1, GenericsType<T> g2) {
		return g1.get().equals(g2.get());
	}

	public static void main(String args[]) {
		GenericsType<String> g1 = new GenericsType<>();
		g1.set("JAC444");

		GenericsType<String> g2 = new GenericsType<>();
		g2.set("JAC444");

		boolean isEqual = GenericsMethods.<String>isEqual(g1, g2);
		// above statement can be written simply as
		// isEqual = GenericsMethods.isEqual(g1, g2);
		// This feature, known as type inference, allows you to invoke a generic
		// method as an ordinary method, without specifying a type between angle
		// brackets. Compiler will infer the type that is needed!
		
		System.out.print(isEqual);
	}
}